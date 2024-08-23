export type ChatItemProps = {
    profileImage: string,
    username: string,
    message: string,
    clicked: boolean
    handleSelectChat: () => void
}

export type ChatUserData = {
    id: number,
    profileImage: string,
    username: string,
    message: string,
    clicked: boolean
}