const mongoose = require('mongoose');

function App() {
  // mongoose.connect(
  //   "mongodb+srv://ermuun:animemanga10@cluster0.8befs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  // );
  mongoose.connect('mongodb+srv://ermuun:animemanga10@cluster0.8befs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});

  const Books = mongoose.model("books", { title: String });

  

  return (
    <>
      <div>ok</div>
      <div>ok</div>
      <div>ok</div>
    </>
  );
}

export default App;
