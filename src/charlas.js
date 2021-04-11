const { createElement} = React;
const html = htm.bind(createElement);

import Toolbar from './toolbar.js';

class Charlas extends React.Component {
    render() {
        return html`
            <${Ons.Page}
                style=${{ display: "inline" }}>
               charlas
            <//>
        `;
	}
}

export default Charlas;