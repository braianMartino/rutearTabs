const { createElement} = React;
const html = htm.bind(createElement);

import Login from './login.js'; 
import Charlas from './charlas.js'

class App extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = { index: 0 }
    }

    renderToolbar () { //A: barra superior que muestra titulo de la tab que se muestra
        const titles = [ "Podemos Aprender" ,"Charlas"];
        return html `(
            <${Ons.Toolbar} style=${{backgroundColor:"gray"}}>
                <img src="logo.png" style=${{marginTop:"5px", paddingLeft:"5px"}}  height="30" alt=""></img>
                <div className="center">${titles[this.state.index]}</div>
            <//>
        )`;
    }

    cuandoLoginOk ( usuarioId ) { //A: cuando el login  es correcto setea index y usuarioId para actualizar componente y definir que tab se va a mostrar
        this.setState({ index: 0, usuarioId });
    }
    
    renderTabs () { // A: contiene las tabs que se van a mostrar en Ons.Tabbar
        return `[
            {
                content: <${Charlas} usuarioId=${this.state.usuarioId}/><//>,
                tab: <${Ons.Tab} label="Charlas" icon="md-view-day" /><//>,
            }
        ]`;
    }

	render() {
		return html`(
            <${Ons.Page} renderToolbar=${() => this.renderToolbar()}> 
                { this.state.usuarioId == null
                    ? <${Login} cuandoOk=${this.cuandoLoginOk.bind(this)}><//>
                    : <${Ons.Tabbar}
                        swipeable=${true}
                        position="auto"
                        index=${this.state.index}
                        onPreChange=${(event) => {
                            if (event.index != this.state.index) {
                                this.setState({ index: event.index });
                            }
                        }}
                        renderTabs=${() => this.renderTabs()}
                    /><//>
                }  
            <//>
        )`;
	}
}

export default App;
