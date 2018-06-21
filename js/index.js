import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import PCHome from './containers/PCHome';
import PCDocument from './containers/PCDocument';
import PCEmail from './containers/PCEmail';
import PCLogin from './containers/PCLogin';
import PCMaterial from './containers/PCMaterial';
import PCParent from './containers/PCParent';
import PCPayment from './containers/PCPayment';
import PCTeacher from './containers/PCTeacher';
import PCTeachManage from './containers/PCTeachManage';
import PCTest from './containers/PCTest';


import MediaQuery from 'react-responsive';
import PCParentMonitor from "./containers/PCParentMonitor/index";
import PCParentCheckOn from "./containers/PCParentCheckOn/index";
import PCTeacherChildXX from "./containers/PCTeacherChildXX/index";
import PCTeacherParentXX from "./containers/PCTeacherParentXX/index";
import PCTeacherCheckOn from "./containers/PCTeacherCheckOn/index";
import PCTeacherPlan from "./containers/PCTeacherPlan/index";
import PCTeachActive from "./containers/PCTeachActive/index";
import PCTeachNotice from "./containers/PCTeachNotice/index";
import PCTeachNoticeContent from "./containers/PCTeachNoticeContent/index";
import PCPaymentXFCX from "./containers/PCPaymentXFCX/index";
import PCPaymentSJCX from "./containers/PCPaymentSJCX/index";
import PCPaymentJF from "./containers/PCPaymentJF/index";
import PCDocumentAcheivement from "./containers/PCDocumentAcheivement/index";

import MobileHome from './containers/MobileHome';
import MobileLogin from "./containers/MobileLogin/index";
import MobileParentMonitor from "./containers/MobileParentMonitor/index";
import MobileParentCheckon from "./containers/MobileParentCheckon/index";
import MobileParentJF from "./containers/MobileParentJF/index";
import MobileTeacherCheckon from "./containers/MobileTeacherCheckon/index";
import MobileTeacherXX from "./containers/MobileTeacherXX/index";
import MobileTeacherPlan from "./containers/MobileTeacherPlan/index";
import MobileNotice from "./containers/MobileNotice/index";
import MobileTeachNoticeContent from "./containers/MobileTeachNoticeContent/index";

class Index extends React.Component {
    render() {
        return (
            <div className="main">
                <MediaQuery query='(min-device-width: 1224px)'>
                    <div className="main">
                        <Router>
                            <Switch>
                                <Route exact path="/" component={PCHome}/>
                                <Route path="/parent/monitor" component={PCParentMonitor}/>
                                <Route path="/parent/checkon" component={PCParentCheckOn}/>
                                {/*<Route path="/parent" component={PCParent}/>*/}
                                <Route path="/teacher/childxx" component={PCTeacherChildXX}/>
                                <Route path="/teacher/parentxx" component={PCTeacherParentXX}/>
                                <Route path="/teacher/checkon" component={PCTeacherCheckOn}/>
                                <Route path="/teacher/plan" component={PCTeacherPlan}/>
                                {/*<Route path="/teacher" component={PCTeacher}/>*/}
                                {/*<Route path="/teach_manage" component={PCTeachManage}/>*/}
                                <Route path="/teach_manage/active" component={PCTeachActive}/>
                                <Route path="/teach_manage/notice/content" component={PCTeachNoticeContent} />
                                <Route path="/teach_manage/notice" component={PCTeachNotice}/>
                                <Route path="/email" component={PCEmail}/>
                                <Route path="/material" component={PCMaterial}/>
                                <Route path="/payment/xfcx" component={PCPaymentXFCX}/>
                                <Route path="/payment/sjcx" component={PCPaymentSJCX}/>
                                <Route path="/payment/jf" component={PCPaymentJF}/>
                                <Route path="/payment" component={PCPayment}/>
                                <Route path="/document/achievement" component={PCDocumentAcheivement}/>
                                <Route path="/document/information" component={PCDocument}/>
                                <Route path="/test" component={PCTest}/>
                                <Route path="/login" component={PCLogin} />
                            </Switch>
                        </Router>
                    </div>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1223px)'>
                    <div className="main">
                        <Router>
                            <Switch>
                                <Route exact path="/" component={MobileHome}/>
                                <Route path="/login" component={MobileLogin} />
                                <Route path="/parent/monitor" component={MobileParentMonitor}/>
                                <Route path="/parent/checkon" component={MobileParentCheckon}/>
                                <Route path="/parent/payment" component={MobileParentJF}/>
                                <Route path="/teacher/xx" component={MobileTeacherXX}/>
                                <Route path="/teacher/checkon" component={MobileTeacherCheckon}/>
                                <Route path="/teacher/plan" component={MobileTeacherPlan}/>
                                <Route path="/notice" component={MobileNotice}/>
                                <Route path="/teach_manage/notice/content" component={MobileTeachNoticeContent} />
                            </Switch>
                        </Router>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('app'));
