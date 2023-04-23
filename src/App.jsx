import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import menu from "./data";
import Categories from "./Categories";
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const categoryItems = ["All", ...new Set(menu.map((cat) => cat.category))];

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(menu);
      return;
    }
    setMenuItems(menu.filter((item) => item.category === category));
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categoryItems={categoryItems} filterItems={filterItems} />

        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
