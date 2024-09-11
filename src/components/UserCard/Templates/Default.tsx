import UserCard from "../Components"

export default () => (
    <UserCard.List>
        <UserCard.Item type='student' />
        <UserCard.Item type='teacher' />
        <UserCard.Item type='parent' />
        <UserCard.Item type='staff' />
    </UserCard.List>
)