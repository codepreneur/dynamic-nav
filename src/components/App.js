import React, { PureComponent } from 'react'
import nav from './nav'

export default class App extends PureComponent {

  state = {
    content: ''
  }

  setContent = (content, self) => self.setState({content})

  render() {

    return (
      <div>

        <div id="container">
          <nav>
            <ul>
              {nav.map(n => (
                <li key={n.key}>
                  <a href="#">{n.label}</a>
                  {n.child && n.child.length !== 0 &&
                    <ul>
                      {n.child && n.child.length !== 0 && n.child.map(c => (
                        <li onClick={this.setContent.bind(null, c.content, this)}>
                          <a href="#">{c.label}</a>

                          {c.child && c.child.length !== 0 &&
                            <ul>
                              {c.child && c.child.length !== 0 && c.child.map(d => (
                                <li onClick={this.setContent.bind(null, d.content, this)}><a href="#">{d.label}</a></li>
                              ))}
                            </ul>
                          }

                        </li>
                      ))}
                    </ul>
                  }
                </li>
              ))}

            </ul>
          </nav>
        </div>

        <h1>{this.state.content}</h1>


      </div>

    )
  }
}
