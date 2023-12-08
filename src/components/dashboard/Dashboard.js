import React, { Component } from "react";
import Notification from "../projects/Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";


class Dashboard extends Component {
    render() {
        console.log(this.props);

        const { projects } = this.props;


        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                    <div className="cols s12 m5 offset-m1">
                            <ProjectList  projects={projects} />
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


const mapStateToProps = (state) => {
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)