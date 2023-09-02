// importando o react router dom
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";

//importando paginas
import { Home } from '../pages/home/home';
import { Venda } from '../pages/venda/venda';
import { Financie } from '../pages/financie/financie';
import { Procura } from '../pages/procura/procura';
import { Sobre } from '../pages/sobre/sobre';


export const Routes = () => {
    return (

        <Router>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/Venda" element={<Venda />} />
                <Route path="/Financie" element={<Financie />} />
                <Route path="/Procura" element={<Procura />} />
                <Route path="/Sobre" element={<Sobre />} />
            </Switch>
        </Router>

    )
}