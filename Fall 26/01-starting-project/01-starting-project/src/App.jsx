//app
import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';

// Question 1 Data object
export const user = {
  name: '',
};
// Question 5 Inline Component & Array
export function Todo({ text }) {
  return <li>{text}</li>;
}

export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

export default function App() {
  // Question 1
  function handleCreateUser(name) {
    user.name = name;
  }
  
  // Question 2
  const [price, setPrice] = useState(100);

  function handleApplyDiscount() {
    setPrice(75);
  }

  // Question 3
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  function handleDeleteClick() {
    setIsAlertVisible(true);
  }

  function handleProceedClick() {
    setIsAlertVisible(false);
  }

  // Question 4
  const [isActive, setIsActive] = useState(false);

  function handleToggleStyle() {
    setIsActive((prevActive) => !prevActive);
  }

  return (
    <>
      {/* Question 1 */}
      <div id="app">
        <h1>User Login</h1>
        <p>
          <label>Name</label>
          <input type="text" />
        </p>
        <p id="actions">
          <button onClick={() => handleCreateUser('George')}>Create User</button>
        </p>
      </div>

      {/* Question 2 */}
      <div>
        <hr />
        <p data-testid="price">${price}</p>
        <button onClick={handleApplyDiscount}>Apply Discount</button>
      </div>

      {/* Question 3 */}
      <div>
        <hr />
        {isAlertVisible && (
          <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={handleProceedClick}>Proceed</button>
          </div>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      </div>

      {/* Question 4 */}
      <div>
        <hr />
        <p className={isActive ? 'active' : ''}>Style me!</p>
        <button onClick={handleToggleStyle}>Toggle style</button>
      </div>

      {/* Question 5 */}
      <div>
        <hr />
        <ul>
          {DUMMY_TODOS.map((item, index) => (<Todo key={index} text={item} />))}
        </ul>
      </div>

      {/* Classwork */}
      <hr />
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}