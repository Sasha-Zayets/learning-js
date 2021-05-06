import arrTask from './main'


const renderItem = arrTask.map((arrTask) =>
{

  return `
  <div>
  <input type="checkbox" name="check"/>
  <input type="text" name="text"/>
  <button type="submit" name="submit">Delete</button>
  </div>
  `
})

function renderItems (){

}