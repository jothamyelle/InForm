export function userMinutesWorkedSum(id, array) {
  let minutesWorkedCount = 0;
  let userObject = {
    user_id: id,
    shift_count: 0
  };
  for (let i = 0; i < array.length; i++ ){
    if (array[i].id === id) {
      minutesWorkedCount += array[i].minutes_worked;
      userObject.shift_count++;
      userObject['minutes_worked'] = minutesWorkedCount;
      userObject['first_name'] = array[i].first_name;
      userObject['last_name'] = array[i].last_name;
    }
  }
  return userObject;
}
