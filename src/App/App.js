import { Component } from "react";
import axios from "axios";
import s from "./App.module.css";

class App extends Component {
  state = {
    categories: [],
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://ns-shopify.herokuapp.com/api/v1/categories"
      );
      this.setState({ categories: response.data });
    } catch (error) {
      return console.log(error.message);
    }
  }
  render() {
    const { categories } = this.state;

    const sortedCategories = categories.sort((a, b) => a.id - b.id);
    return (
      <div className={s.app}>
        <header className="header">
          <img src="" alt="" />
          <nav className="nav"></nav>
        </header>
        <main className="main">
          <ul className="categories">
            {sortedCategories.map((category) => {
              return <li className="category " key={category._id}>
              <div className="wrapper">
                {/* <img src={category.imageUrl} alt=""/> */}
                <div className="image" style={{backgroundImage:`url(${category.imageUrl})`}}/>
              </div>
              <div className="content">
                <div className="title">{category.title}</div>
              </div>
              </li>;
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
