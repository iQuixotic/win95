import * as React from "react";
import { Icon } from "../../../components";
import { Layout } from "../../../containers";
import { RecycleBin } from '../../../assets';

// import { API } from "../../../utils";

import './style.css';

class Main extends React.Component {
    render() {
    return(
        <Layout>
            something new ....
            <Icon src={RecycleBin} />
            <Icon src={RecycleBin} />
            <Icon src={RecycleBin} />
            <Icon src={RecycleBin} />

        </Layout>
    );
  }
}

export default Main;