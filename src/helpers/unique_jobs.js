// Receives an id and an array that has object info. 
export function uniqueJobsArray(id, array) {
  let jobObject = {
    job_id: id
  };
  for (let i = 0; i < array.length; i++ ){
    if (array[i].jobId === id) {
      jobObject['name'] = array[i].name;
    }
  }
  return jobObject;
}
