import style from "./App.module.css";
import { ComponentWithChildren } from "./components/ComponentWithChildren/ComponentWithChildren";
import { CustomImageFrame } from "./components/CustomImageFrame/CustomImageFrame";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  return (
    <div>
      <header className={style.header}>
        <h1>React Component Variations</h1>
      </header>

      <main>
        <section>
          <h2>Parameterized Components</h2>

          {/* You can pass anything javascript like as properties */}
          {/* <CustomImageFrame
            src="beach-vollyball-2020.jpg"
            numberWorks={3999}
            array={[1, 2, 3, 4]}
            obj={{name: "lars", age: 35}}
            func={() => {console.log("hello world")}}
            funcReference={console.log}
            component={<h1>Testing testing</h1>}
          /> */}
          <CustomImageFrame
            src="https://images.unsplash.com/photo-1735306005581-e09d7dda15b1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Winter landscape"
          />
        </section>

        <section>
          <h2>Compoent with Children</h2>

          <ComponentWithChildren>
            <li>Hello</li>
            <li>World</li>
            <li>Foo</li>
            <li>Bar</li>
            <li>
              <p>Hello</p>
              <CustomImageFrame src="https://images.unsplash.com/photo-1735306005581-e09d7dda15b1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </li>
          </ComponentWithChildren>
        </section>

        <section>
          <h2>Rendering of Lists</h2>

          <ProductList />
        </section>
      </main>
    </div>
  );
}

export default App;
