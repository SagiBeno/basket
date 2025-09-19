import React from "react";
import "./App.css"

export default class App extends React.Component{

  state = {
    cart: {
      items:[
        //{name:'Laptop',price:1200,quantity:1},
        //{name:'Headphone',price:200,quantity:1}
      ]
    },
    nev: null,
    ar: 0,
    db: 0
  }

  handleButtonClick = e => {
    e.preventDefault();

    // implement cart item insertion
    console.log('handleButtonClick', this.state)
    if (this.state.ar && this.state.ar > 0 && this.state.db && this.state.db > 0 && this.state.nev) {
      this.setState({cart: {items: 
        [...this.state.cart.items,
          {
            name: this.state.nev,
            price: +this.state.ar,
            quantity: +this.state.db
          }
        ]
      }})
    } else{
      alert('Please fill all fields!')
    }
  }

  render() {
    return <div>
      <form>
        <h1>Termék hozzáadása a kosárhoz</h1>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="input_nev">Termék neve: </label></td>
              <td><input type="text" id="input_nev" name="input_nev" placeholder="Név..." required
                  onChange={e => this.setState({nev: e.target.value})}/>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="input_ar">Ár: </label></td>
              <td><input type="number" id="input_ar" name="input_ar" value={this.state.ar} 
                  onChange={e => this.setState({ar: +e.target.value})}/>
                  </td>
            </tr>
            <tr>
              <td><label htmlFor="input_db">Mennyiség: </label></td>
              <td><input type="number" id="input_db" name="input_db"value={this.state.db} 
                onChange={e => this.setState({db: +e.target.value})}/>
              </td>
            </tr>
          </tbody>
        </table>
      
        <input type="button" id="btn_submit" name="btn_submit" value="Hozzáadás a kosárhoz" onClick={this.handleButtonClick}/><br />
      </form>
      <hr />
      <h3>A kosár tartalma</h3>
      
      {
        this.state.cart.items.length >= 1 
        ? // ha igaz
        /*<ul>
          {this.state.cart.items.map((item, idx) => 
           <li key={idx}>
            {item.name} - Ár: {item.price} Ft, Mennyiség: {item.quantity} db
           </li> 
          )}
        </ul>*/
        <table className="outputTable">
          <tbody>
            <tr>
              <th>Áru</th>
              <th>Ár</th>
              <th>Mennyiség</th>
            </tr>  
            {this.state.cart.items.map((item, idx) => 
              <tr key={idx}>
               <td>{item.name}</td>
               <td>{item.price} Ft</td>
               <td>{item.quantity} db</td>
              </tr> 
            )}
          </tbody>
        </table>
        : //ha hamis
        <p>A kosár üres.</p>
      }
      
    </div>
  }
}