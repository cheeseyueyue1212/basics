import React, { Component } from 'react';
import PropTypes from 'prop-types';
const ThemeContext = React.createContext('light');

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar (props) {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

function ThemeButton () {
  return (
    <ThemeContext.Consumer>
      {
        value => (
          <button>{value}</button>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default App;


// --------------------------------------------------------------------
// mfq eg:
import React, { Component, createContext } from 'react';

const PageContext = createContext();
const PageProvider = PageContext.Provider;
const PageConsumer = PageContext.Consumer;
const withConsumer = Component => {
    const NewComponent = (props) => {
        return <PageConsumer>
            {
                store => {
                    return <Component {...props} {...store } />
                }
            }
        </PageConsumer>
    }
    return NewComponent;
}
export {
    PageProvider,
    PageConsumer,
    withConsumer
}

// index.js
(
    <PageProvider value={this.store}>
        ...something
    </PageProvider>
)

// child.js
@withConsumer
export class LeftDomContent extends React.Component{

    render() {
        return (
            <div className="tree-area">
      
            </div>
        )
    }
}