import React, {Component} from 'react';
import Dropdown from "./GLUI/dropdown/Dropdown";
import Form from "./GLUI/form/Form";
import Input from "./GLUI/form/Input";
import Select from "./GLUI/form/Select";
import Tooltip from "./GLUI/Tooltip";
import List from "./GLUI/form/List/List";
import ListItem from "./GLUI/form/List/ListItem";
import Table from "./GLUI/table/Table";
import SwitcherClass from "./GLUI/switchers/SwitcherClass";
import Message from "./GLUI/messages/Message";
import {Panel} from "./GLUI/ui/Panel";
import {Cards} from "./GLUI/ui/Cards";

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container grid-container">
                <nav className="navbar">
                    <a href="#" className="logo">
                        <img src="http://via.placeholder.com/70x70" width="70" height="70" alt="logo"/>
                    </a>
                    <ul className="menu">
                        <li><a href="#">Menu 1</a></li>
                        <li><a href="#" className="active">Menu 2</a></li>
                        <li><a href="#">Menu 3</a></li>
                        <Dropdown label="Plus">
                            <li><a href="http://google.com">Google</a></li>
                            <li><a href="#">Test</a></li>
                        </Dropdown>
                    </ul>
                    <ul className="menu">
                        <li><a href="#">Menu 4</a></li>
                        <li><a href="#">Menu 5</a></li>
                        <li><a href="#">Menu 6</a></li>
                        <li><a id="ham-button"><span className="oi" data-glyph="expand-left"/></a></li>
                    </ul>
                </nav>
                <SwitcherClass trigger="ham-button" className="active">
                    <aside className="sidebar">
                        <h2>Sidebar</h2>
                        <ul>
                            <li>Links</li>
                            <li><a href="#">First link</a></li>
                            <li><a href="#" className="active">Second link</a></li>
                            <li><a href="#">Third link</a></li>
                            <li>Separator</li>
                            <li><a href="#">Fourth link</a></li>
                        </ul>
                    </aside>
                </SwitcherClass>
                <div className="messages">
                    <Message timer>
                        <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Animi architecto
                        atque beatae
                        consequuntur cum ducimus ea eos eum inventore, ipsa odio quae quam, qui quod quos recusandae
                        tempora totam voluptatem!
                    </Message>
                    <Message success timer>
                        <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Animi architecto
                        atque beatae
                        consequuntur cum ducimus ea eos eum inventore, ipsa odio quae quam, qui quod quos recusandae
                        tempora totam voluptatem!
                    </Message>
                    <Message error timer>
                        <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Animi architecto
                        atque beatae
                        consequuntur cum ducimus ea eos eum inventore, ipsa odio quae quam, qui quod quos recusandae
                        tempora totam voluptatem!
                    </Message>
                </div>
                <main className="content">
                    <h1>Title 1</h1>
                    <h2>Title 2</h2>
                    <h3>Title 3</h3>
                    <h4>Title 4</h4>
                    <h5>Title 5</h5>
                    <h6>Title 6</h6>
                    <p>Lorem ipsum <strong>dolor</strong> sit amet, <i>consectetur</i> adipisicing elit.
                        <b>Alias</b> cumque est
                        harum iure laborum nesciunt odit
                        qui totam! Aliquam aperiam <span className="label">asperiores</span> dolorem dolorum facere
                        &nbsp;<a
                            href="#">fuga</a> laboriosam laudantium nobis optio
                        voluptatem?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim harum in iste quaerat unde?
                        Accusantium,
                        ad
                        alias aliquid cum esse <Tooltip message="Ceci est un message"><a
                            href="#">fogit</a></Tooltip> id
                        laudantium libero ratione reiciendis, totam
                        voluptatem. Accusamus,
                        saepe.
                    </p>
                    <p>Lorem ipsum
                        sit amet, consectetur <Tooltip message="Ceci est un message" top>fogit</Tooltip> adipisicing
                        elit. Consequatur esse quae sapiente veritatis. Modi
                        neque, numquam quod repellat sapiente voluptas. Alias aperiam cum hic inventore, iure
                        provident quam
                        sequi
                        voluptatum!
                    </p>
                    <Table headers={["Firstname", "Lastname"]} data={[
                        ["John", "Doe",
                            <Dropdown className="btn"
                                      label={<span><span className="oi" data-glyph="cog"/>Actions</span>}>
                                <li><a className="success" href="#">Edit</a></li>
                                <li><a className="error" href="#">Delete</a></li>
                            </Dropdown>],
                        ["Bob", "Marlay",
                            <Dropdown className="btn"
                                      label={<span><span className="oi" data-glyph="cog"/>Actions</span>}>
                                <li><a className="success" href="#">Edit</a></li>
                                <li><a className="error" href="#">Delete</a></li>
                            </Dropdown>],
                        ["Michael", "Jackson",
                            <Dropdown className="btn"
                                      label={<span><span className="oi" data-glyph="cog"/>Actions</span>}>
                                <li><a className="success" href="#">Edit</a></li>
                                <li><a className="error" href="#">Delete</a></li>
                            </Dropdown>],
                    ]}/>
                    <table className="stripped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Jonathan</td>
                            <td>John</td>
                            <td>
                                <Dropdown className="btn"
                                          label={<span><span className="oi" data-glyph="cog"/>Actions</span>}>
                                    <li><a className="success" href="#">Edit</a></li>
                                    <li><a className="error" href="#">Delete</a></li>
                                    <li><a className="warning" href="#">Archive</a></li>
                                    <li><a className="default" href="#">Test</a></li>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>Robert</td>
                            <td>Bob</td>
                            <td>
                                <Dropdown className="btn"
                                          label={<span><span className="oi" data-glyph="cog"/>Actions</span>}>
                                    <li><a href="#">Edit</a></li>
                                    <li><a href="#">Delete</a></li>
                                </Dropdown>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <Panel title="Titre">
                        <Form submit="Valider" onSubmit={(values) => console.log(values)} action="#"
                              method="POST" onChange={(id, val, success, message) => {
                            console.log(id, val, success, message);
                        }}>
                            <Input id="username" required label="Username" success
                                   help="Ceci est un message d'aide"/>
                            <Input rule="test" id="firstname" label="First Name" error
                                   help="Ceci est un message d'aide"/>
                            <Input id="lastname" label="Last Name" warning help="Ceci est un message d'aide"/>
                            <Input id="email" label="E-mail" default help="Ceci est un message d'aide"/>
                            <Input id="password" type="password" label="Password"/>
                            <Input id="termOfServices" rule="true" ruleMessage="This should be checked."
                                   type="checkbox" label="Term of Services"/>
                            <Select id="gender" value="male" label="Gender (native)">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Select>
                            <List id="genderBis" label="Gender" error>
                                <ListItem value="male">Male</ListItem>
                                <ListItem value="female" label="Female"/>
                            </List>
                            <List id="month" value={['jan', 'feb']} label="Month" multiple searchable>
                                <ListItem value="jan" label="January"/>
                                <ListItem value="feb" label="February"/>
                                <ListItem value="mar" label="March"/>
                                <ListItem value="apr" label="April"/>
                                <ListItem value="may" label="May"/>
                                <ListItem value="jun" label="June"/>
                                <ListItem value="jul" label="July"/>
                                <ListItem value="aug" label="August"/>
                                <ListItem value="sep" label="September"/>
                                <ListItem value="oct" label="October"/>
                                <ListItem value="nov" label="November"/>
                                <ListItem value="dec" label="December"/>
                            </List>
                            <div className="form-actions">
                                <button className="btn">Ok</button>
                                <button className="btn error">Cancel</button>
                                <button className="btn success">Submit</button>
                                <button className="btn warning">Beware</button>
                                <button className="btn default">Some button</button>
                                <button className="btn dark"><span className="oi" data-glyph="moon"/>Dark side
                                </button>
                            </div>
                        </Form>
                    </Panel>
                    <Cards>
                        <div className="card">
                            <div className="card-heading">Titre</div>
                            <div className="card-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolorum et iste
                                maiores minus molestiae quas reiciendis reprehenderit? Dicta dolorum ducimus earum
                                error libero necessitatibus quam sed tempora! Ad, soluta?
                            </div>
                            <ul className="card-list">
                                <li>Lorem ipsum dolor sit amet.
                                </li>
                                <li>Atque commodi distinctio dolor.
                                </li>
                                <li>Ab delectus exercitationem explicabo ipsam.
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-heading">Titre</div>
                            <div className="card-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolorum et iste
                                maiores minus molestiae quas reiciendis reprehenderit? Dicta dolorum ducimus earum
                                error libero necessitatibus quam sed tempora! Ad, soluta?
                            </div>
                            <ul className="card-list">
                                <li>Lorem ipsum dolor sit amet.
                                </li>
                                <li>Atque commodi distinctio dolor.
                                </li>
                                <li>Ab delectus exercitationem explicabo ipsam.
                                </li>
                            </ul>
                        </div>
                        <div className="card large">
                            <div className="card-heading">Titre</div>
                            <div className="card-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolorum et iste
                                maiores minus molestiae quas reiciendis reprehenderit? Dicta dolorum ducimus earum
                                error libero necessitatibus quam sed tempora! Ad, soluta?
                            </div>
                            <div className="separator"/>
                            <ul className="card-list">
                                <li>Lorem ipsum dolor sit amet.
                                </li>
                                <li>Atque commodi distinctio dolor.
                                </li>
                                <li>Ab delectus exercitationem explicabo ipsam.
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-heading">Titre</div>
                            <div className="card-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolorum et iste
                                maiores minus molestiae quas reiciendis reprehenderit? Dicta dolorum ducimus earum
                                error libero necessitatibus quam sed tempora! Ad, soluta?
                            </div>
                            <ul className="card-list">
                                <li>Lorem ipsum dolor sit amet.
                                </li>
                                <li>Atque commodi distinctio dolor.
                                </li>
                                <li>Ab delectus exercitationem explicabo ipsam.
                                </li>
                            </ul>
                        </div>
                    </Cards>
                </main>
            </div>
        );
    }
}
