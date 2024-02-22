const UserItem = (props) => {
    return (
        <div>
            <li>
                {props.user.id}
                {props.user.firstName}
                {props.user.lastName}
                {props.user.email}
            </li>
        </div>
    );
};

export default UserItem;
