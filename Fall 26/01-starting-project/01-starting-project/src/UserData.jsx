function UserData() {
    const user = {
    firstName: 'Angelo',
    lastName: 'Salvo',
    age: 25
  };
  return (
   <div>
    User Data
    <li>First Name: {user.firstName}</li>
    <li>Last Name: {user.lastName}</li>
    <li>Age: {user.age}</li>
   </div>
  )
}

export default UserData;