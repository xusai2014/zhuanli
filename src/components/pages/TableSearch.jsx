import  React from 'react';
import { connect } from 'react-redux';
import A from '../modules/ZhuanliList';
import InputModule from '../modules/InputModule';
import SelectDate from '../modules/SelectDate';


class TableSearch extends React.Component{
    render(){
        return(
            <div>
                <A/>
                <div>
                   <form className="form-horizontal formContainer">
                        <fieldset>

                            <div className="control-group formContainer">
                                <div className="controls row paddingBottom">
                                    <div  className="col-md-2 col-sm-4 col-xs-6">
                                        <input type="radio" value="3"  className="paddingLeft" />
                                        <span>中国发明专利</span></div>
                                    <div className="col-md-2 col-sm-4 col-xs-6">
                                        <input type="radio" value="3"  className="paddingLeft" />
                                        <span>中国实用新型</span></div>
                                   <div className="col-md-2 col-sm-4 col-xs-6"><input type="radio" value="3" className="paddingLeft"  />
                                       <span>中国外观设计</span></div>
                                   <div className="col-md-2 col-sm-4 col-xs-6"><input type="radio" value="3"  className="paddingLeft" />
                                       <span>中国发明授权</span></div>
                                    <div className="col-md-2 col-sm-4 col-xs-6"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>中国台湾</span></div>
                                    <div className="col-md-2 col-sm-4 col-xs-6"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>香港特区</span></div>


                                </div>
                                <div className="controls row paddingBottom">
                                    <div  className="col-md-1 col-sm-2 col-xs-4">
                                        <input type="radio" value="3"  className="paddingLeft" />
                                        <span>美国</span></div>
                                    <div className="col-md-1 col-sm-2 col-xs-4">
                                        <input type="radio" value="3"  className="paddingLeft" />
                                        <span>日本</span></div>
                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>英国</span></div>
                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3"  className="paddingLeft" />
                                        <span>德国</span></div>
                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>法国</span></div>
                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>瑞士</span></div>
                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>EPO</span></div>
                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>WIPO</span></div>

                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>韩国</span></div>

                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>俄罗斯</span></div>
                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>东南亚</span></div>

                                    <div className="col-md-1 col-sm-2 col-xs-4"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>阿拉伯</span></div>


                                </div>
                                <div className="controls row paddingBottom listColor">
                                    <div  className="col-md-2 col-sm-4 col-xs-6">
                                        <input type="radio" value="3"  className="paddingLeft" />
                                        <span>全选库</span></div>
                                    <div className="col-md-2 col-sm-4 col-xs-6">
                                        <input type="radio" value="3"  className="paddingLeft" />
                                        <span>反选库</span></div>
                                    <div className="col-md-2 col-sm-4 col-xs-6"><input type="radio" value="3" className="paddingLeft"  />
                                        <span>中国</span></div>
                                    <div className="col-md-2 col-sm-4 col-xs-6"><input type="radio" value="3"  className="paddingLeft" />
                                        <span>其他国家</span></div>

                                </div>
                            </div>

                        </fieldset>
                    </form>
                </div>
                <form className="form-horizontal formContainer">
                    <fieldset>
                        <div id="legend" className="">
                            <legend className="">表格检索</legend>
                        </div>
                        <div className="control-group formContainer">
                            <InputModule content="申请(专利)号：" placeholder="例如:CN02144686.5或%02%44%"/>
                            <InputModule content="公开(公告)号：" placeholder="例如:CN1387751或%13877"/>
                            <SelectDate content="申请日：" placeholder="例如:20101010或2001.10.10 或 2003 to 2010"/>
                            <SelectDate content="公开(公告)日：" placeholder="例如:20101010或2001.10.10 或 2003 to 2010"/>
                            <InputModule content="名称：" placeholder="例如:计算机或%计算机 and/or/not 电子"/>
                            <InputModule content="摘要：" placeholder="例如:计算机或%计算机 and/or/not 电子"/>
                            <InputModule content="权利要求书：" placeholder="例如:计算机 and 应用 或计算机 or 控制"/>
                            <InputModule content="申请(专利权)人：" placeholder="例如:刘超或刘超 and/or 刘琦"/>
                            <InputModule content="发明人：" placeholder=" 例如:顾学平或顾学平 and/or 曹光群"/>
                            <InputModule content="代理机构：" placeholder="例如: 广州市专利事务所"/>
                            <InputModule content="代理人：" placeholder="例如:李恩庆 或 李恩庆 or 马守忠"/>
                            <InputModule content="主分类号：" placeholder="例如:G06F15/16 and/or/not G06F15/17"/>
                            <InputModule content="分类号：" placeholder="例如:G06F15/16 and/or/not G06F15/17"/>
                            <InputModule content="地址：" placeholder="例如:广东省广州市或广东省%广州市"/>
                            <InputModule content="国省代码：" placeholder="例如:广东% 或 %32%"/>
                            <InputModule content="说明书：" placeholder="例如:计算机 and 应用 或计算机 or 控制"/>
                            <InputModule content="同族专利：" placeholder="例如:US24512305F"/>
                            <InputModule content="优先权：" placeholder="例如:92112960"/>
                            <InputModule content="国际申请：" placeholder="例如:PCT/FR00/03048"/>
                            <InputModule content="国际公布：" placeholder="例如:WO01/32137"/>
                            <InputModule content="智能检索：" placeholder="例如:使用变量认证的密钥数字认证方法 或 %密钥数字认证方法%"/>
                        </div>
                    </fieldset>
                </form>
            </div>
           )
    }
}
const mapStateToProps = (state, props) => {
    return {
        a: state.userReducer.a,
    }
}

export default connect(mapStateToProps)(TableSearch)