import * as React from "react";
import { Icon } from "../../../components";
import { Layout } from "../../../containers";
import { RecycleBin_I, Computer_I, File_I, IE_I } from '../../../assets';

// import { API } from "../../../utils";

import './style.css';

class Main extends React.Component {
    render() {
    return(
        <Layout>
            something new ....
            <Icon src={RecycleBin_I} />
            <Icon src={Computer_I} />
            <Icon src={IE_I} />
            <Icon src={File_I} />

        </Layout>
    );
  }
}

export default Main;