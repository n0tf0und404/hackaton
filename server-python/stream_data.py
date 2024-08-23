from fastapi import WebSocket, WebSocketDisconnect
from openai import OpenAI

# Configuración del cliente OpenAI
client = OpenAI(base_url="http://localhost:1234/v1", api_key="lm-studio")

# @app.websocket("/ws/chat")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            # Espera el prompt del cliente
            data = await websocket.receive_text()
            
            history = [
                {"role": "system", "content": """Sos un asistente inteligente experto en el area de salud. Tu nombre es Doctor IA.
    Si el paciente te dice una patologia medica, un dolor corporal o algun sintona, dile que consulte con su medico de cabecera.
    Podes brindar el indice de masa corporal le calculas, pedile su peso y altura para calcular su IMC. Dale el rango de un indice de masa corporal. Y dile si esta obeso o no y dale consejos a corde su situacion.
    Podes dar recetas saludables segun su condicion.
    Podes dar rutina de entrenamiento al aire libre como caminar, correr y ejercicios corporales.
    No podes dar una atencion clinica, recomienda siempre que consulte con su medico de cabecera.
    No superes los 50 caracteres en la respuesta.    
    Da respuestas cortas."""},
    {"role": "user", "content": data},
            ]
            
            # Inicia el streaming de la respuesta
            completion = client.chat.completions.create(
                model="lmstudio-ai/gemma-2b-it-GGUF",
                messages=history,
                temperature=0.7,
                stream=True,
            )

            new_message = {"role": "assistant", "content": ""}

            completed_text = ""

            for chunk in completion:
                if chunk.choices[0].delta.content:
                    # Enviar cada fragmento al cliente
                    completed_text += chunk.choices[0].delta.content
                    await websocket.send_text(completed_text)
                    new_message["content"] += chunk.choices[0].delta.content

            history.append(new_message)

    except WebSocketDisconnect:
        print("Client disconnected")