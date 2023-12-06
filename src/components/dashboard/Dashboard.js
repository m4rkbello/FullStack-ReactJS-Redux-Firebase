import React, { Component } from "react";
import Notification from "../projects/Notifications";
import ProjectList from "../projects/ProjectList";



class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                    <div className="cols s12 m5 offset-m1">
                            <ProjectList />
                        </div>
                        <div className="cols s12 m5 offset-m1">
                            <Notification />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard;