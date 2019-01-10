import React, {Component} from 'react';
import mailbox from '../../static/Mailbox.png';
import cloud from '../../static/Cloud.png';

class Index extends Component{
    render(){
        return(
            <div id="mailbox">
<h1>Mailbox</h1>
<img className="mailboxImg" src={mailbox} />
<img className="cloud1" src={cloud} />
<img className="cloud2" src={cloud} />
            </div>

        )
    }
}

export default Index;