import React from 'react'
import '../../assets/css/position/position.css'
import {withRouter} from 'react-router-dom'

class Position extends React.Component{
    render(){
        let List = JSON.parse(localStorage.cityHis);
        return (

            <section id="city-list" className="city-list-container" style={{display:"block"}}> <section>
                <div id="locate" className="city-title">
                    定位城市
                </div>
                <div className="city-list city-list-inline clearfix">
                    <div className="location-city">定位失败，请点击重试</div>
                </div>
            </section>

                <section className="history-city-list" style={{display:List?'block':'none'}}>
                    <div id="history" className="city-title">
                    最近访问城市
                </div>
                    <div className="city-list city-list-inline clearfix" onClick={this.changeCity.bind(this)}>

                        <div className="city-item"  data-id={List[0].id}>
                            {List[0].name}
                        </div>

                        <div className="city-item"  data-id={List[1].id}>
                            {List[1].name}
                        </div>

                        <div className="city-item"  data-id={List[2].id}>
                            {List[2].name}
                        </div>

                    </div>
                </section>

                <section >
                    <div id="hot" className="city-title">
                        热门城市
                    </div>
                    <div className="city-list city-list-inline clearfix" onClick={this.changeCity.bind(this)}>

                        <div className="city-item" data-nm="上海" data-id="10">
                            上海
                        </div>

                        <div className="city-item" data-nm="北京" data-id="1">
                            北京
                        </div>

                        <div className="city-item" data-nm="广州" data-id="20">
                            广州
                        </div>

                        <div className="city-item" data-nm="深圳" data-id="30">
                            深圳
                        </div>

                        <div className="city-item" data-nm="武汉" data-id="57">
                            武汉
                        </div>

                        <div className="city-item" data-nm="天津" data-id="40">
                            天津
                        </div>

                        <div className="city-item" data-nm="西安" data-id="42">
                            西安
                        </div>

                        <div className="city-item" data-nm="南京" data-id="55">
                            南京
                        </div>

                        <div className="city-item" data-nm="杭州" data-id="50">
                            杭州
                        </div>

                        <div className="city-item" data-nm="成都" data-id="59">
                            成都
                        </div>

                        <div className="city-item" data-nm="重庆" data-id="45">
                            重庆
                        </div>

                    </div>
                </section>

                <section  onClick={this.changeCity.bind(this)}>

                    <div id="A" className="city-title city-title-letter">
                        A
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="阿拉善盟" data-id="150">
                            阿拉善盟
                        </div>



                        <div className="city-item" data-nm="鞍山" data-id="151">
                            鞍山
                        </div>



                        <div className="city-item" data-nm="安庆" data-id="197">
                            安庆
                        </div>



                        <div className="city-item" data-nm="安阳" data-id="238">
                            安阳
                        </div>



                        <div className="city-item" data-nm="阿坝" data-id="319">
                            阿坝
                        </div>



                        <div className="city-item" data-nm="阿里" data-id="350">
                            阿里
                        </div>



                        <div className="city-item" data-nm="安顺" data-id="324">
                            安顺
                        </div>



                        <div className="city-item" data-nm="安康" data-id="359">
                            安康
                        </div>



                        <div className="city-item" data-nm="阿勒泰" data-id="400">
                            阿勒泰
                        </div>



                        <div className="city-item" data-nm="阿克苏" data-id="394">
                            阿克苏
                        </div>



                        <div className="city-item" data-nm="安吉" data-id="490">
                            安吉
                        </div>



                        <div className="city-item" data-nm="安丘" data-id="588">
                            安丘
                        </div>



                        <div className="city-item" data-nm="安岳" data-id="699">
                            安岳
                        </div>



                        <div className="city-item" data-nm="安平" data-id="807">
                            安平
                        </div>



                        <div className="city-item" data-nm="安宁" data-id="873">
                            安宁
                        </div>



                        <div className="city-item" data-nm="安溪" data-id="844">
                            安溪
                        </div>



                        <div className="city-item" data-nm="安化" data-id="1008">
                            安化
                        </div>



                        <div className="city-item" data-nm="阿勒泰市" data-id="1126">
                            阿勒泰市
                        </div>



                        <div className="city-item" data-nm="安福" data-id="1068">
                            安福
                        </div>



                        <div className="city-item" data-nm="阿荣旗" data-id="1229">
                            阿荣旗
                        </div>



                        <div className="city-item" data-nm="安陆市" data-id="1245">
                            安陆市
                        </div>



                        <div className="city-item" data-nm="安州区" data-id="1212">
                            安州区
                        </div>



                        <div className="city-item" data-nm="阿城区" data-id="1280">
                            阿城区
                        </div>


                    </div>

                    <div id="B" className="city-title city-title-letter">
                        B
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="北京" data-id="1">
                            北京
                        </div>



                        <div className="city-item" data-nm="保定" data-id="84">
                            保定
                        </div>



                        <div className="city-item" data-nm="蚌埠" data-id="88">
                            蚌埠
                        </div>



                        <div className="city-item" data-nm="包头" data-id="140">
                            包头
                        </div>



                        <div className="city-item" data-nm="本溪" data-id="153">
                            本溪
                        </div>



                        <div className="city-item" data-nm="巴彦淖尔" data-id="146">
                            巴彦淖尔
                        </div>



                        <div className="city-item" data-nm="白城" data-id="167">
                            白城
                        </div>



                        <div className="city-item" data-nm="白山" data-id="165">
                            白山
                        </div>



                        <div className="city-item" data-nm="亳州" data-id="204">
                            亳州
                        </div>



                        <div className="city-item" data-nm="滨州" data-id="233">
                            滨州
                        </div>



                        <div className="city-item" data-nm="巴中" data-id="317">
                            巴中
                        </div>



                        <div className="city-item" data-nm="北海" data-id="292">
                            北海
                        </div>



                        <div className="city-item" data-nm="百色" data-id="297">
                            百色
                        </div>



                        <div className="city-item" data-nm="毕节" data-id="327">
                            毕节
                        </div>



                        <div className="city-item" data-nm="保山" data-id="332">
                            保山
                        </div>



                        <div className="city-item" data-nm="宝鸡" data-id="353">
                            宝鸡
                        </div>



                        <div className="city-item" data-nm="白银" data-id="363">
                            白银
                        </div>



                        <div className="city-item" data-nm="巴州" data-id="393">
                            巴州
                        </div>



                        <div className="city-item" data-nm="博尔塔拉" data-id="392">
                            博尔塔拉
                        </div>



                        <div className="city-item" data-nm="滨海" data-id="533">
                            滨海
                        </div>



                        <div className="city-item" data-nm="宝应" data-id="602">
                            宝应
                        </div>



                        <div className="city-item" data-nm="北流" data-id="681">
                            北流
                        </div>



                        <div className="city-item" data-nm="博爱" data-id="698">
                            博爱
                        </div>



                        <div className="city-item" data-nm="北碚" data-id="731">
                            北碚
                        </div>



                        <div className="city-item" data-nm="宝丰" data-id="783">
                            宝丰
                        </div>



                        <div className="city-item" data-nm="泌阳" data-id="887">
                            泌阳
                        </div>



                        <div className="city-item" data-nm="博兴" data-id="852">
                            博兴
                        </div>



                        <div className="city-item" data-nm="博山" data-id="952">
                            博山
                        </div>



                        <div className="city-item" data-nm="璧山" data-id="946">
                            璧山
                        </div>



                        <div className="city-item" data-nm="彬州市" data-id="915">
                            彬州市
                        </div>



                        <div className="city-item" data-nm="宾阳" data-id="994">
                            宾阳
                        </div>



                        <div className="city-item" data-nm="博白县" data-id="1102">
                            博白县
                        </div>



                        <div className="city-item" data-nm="博罗县" data-id="1098">
                            博罗县
                        </div>



                        <div className="city-item" data-nm="北镇市" data-id="1141">
                            北镇市
                        </div>



                        <div className="city-item" data-nm="泊头市" data-id="1074">
                            泊头市
                        </div>



                        <div className="city-item" data-nm="北安市" data-id="1165">
                            北安市
                        </div>



                        <div className="city-item" data-nm="巴彦县" data-id="1193">
                            巴彦县
                        </div>


                    </div>

                    <div id="C" className="city-title city-title-letter">
                        C
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="重庆" data-id="45">
                            重庆
                        </div>



                        <div className="city-item" data-nm="成都" data-id="59">
                            成都
                        </div>



                        <div className="city-item" data-nm="长沙" data-id="70">
                            长沙
                        </div>



                        <div className="city-item" data-nm="常州" data-id="89">
                            常州
                        </div>



                        <div className="city-item" data-nm="长春" data-id="116">
                            长春
                        </div>



                        <div className="city-item" data-nm="沧州" data-id="127">
                            沧州
                        </div>



                        <div className="city-item" data-nm="承德" data-id="126">
                            承德
                        </div>



                        <div className="city-item" data-nm="赤峰" data-id="142">
                            赤峰
                        </div>



                        <div className="city-item" data-nm="长治" data-id="131">
                            长治
                        </div>



                        <div className="city-item" data-nm="朝阳" data-id="160">
                            朝阳
                        </div>



                        <div className="city-item" data-nm="池州" data-id="205">
                            池州
                        </div>



                        <div className="city-item" data-nm="巢湖" data-id="202">
                            巢湖
                        </div>



                        <div className="city-item" data-nm="滁州" data-id="199">
                            滁州
                        </div>



                        <div className="city-item" data-nm="潮州" data-id="287">
                            潮州
                        </div>



                        <div className="city-item" data-nm="郴州" data-id="271">
                            郴州
                        </div>



                        <div className="city-item" data-nm="常德" data-id="268">
                            常德
                        </div>



                        <div className="city-item" data-nm="崇左" data-id="301">
                            崇左
                        </div>



                        <div className="city-item" data-nm="楚雄" data-id="337">
                            楚雄
                        </div>



                        <div className="city-item" data-nm="昌吉" data-id="391">
                            昌吉
                        </div>



                        <div className="city-item" data-nm="从化" data-id="421">
                            从化
                        </div>



                        <div className="city-item" data-nm="常熟" data-id="422">
                            常熟
                        </div>



                        <div className="city-item" data-nm="长乐" data-id="463">
                            长乐
                        </div>



                        <div className="city-item" data-nm="长兴" data-id="452">
                            长兴
                        </div>



                        <div className="city-item" data-nm="慈溪" data-id="451">
                            慈溪
                        </div>



                        <div className="city-item" data-nm="昌邑" data-id="527">
                            昌邑
                        </div>



                        <div className="city-item" data-nm="长葛" data-id="627">
                            长葛
                        </div>



                        <div className="city-item" data-nm="苍南" data-id="624">
                            苍南
                        </div>



                        <div className="city-item" data-nm="承德县" data-id="700">
                            承德县
                        </div>



                        <div className="city-item" data-nm="赤壁" data-id="653">
                            赤壁
                        </div>



                        <div className="city-item" data-nm="崇州" data-id="646">
                            崇州
                        </div>



                        <div className="city-item" data-nm="淳安" data-id="660">
                            淳安
                        </div>



                        <div className="city-item" data-nm="曹妃甸" data-id="746">
                            曹妃甸
                        </div>



                        <div className="city-item" data-nm="昌乐" data-id="737">
                            昌乐
                        </div>



                        <div className="city-item" data-nm="磁县" data-id="767">
                            磁县
                        </div>



                        <div className="city-item" data-nm="昌黎" data-id="801">
                            昌黎
                        </div>



                        <div className="city-item" data-nm="岑溪" data-id="811">
                            岑溪
                        </div>



                        <div className="city-item" data-nm="成安" data-id="798">
                            成安
                        </div>



                        <div className="city-item" data-nm="长垣" data-id="795">
                            长垣
                        </div>



                        <div className="city-item" data-nm="曹县" data-id="883">
                            曹县
                        </div>



                        <div className="city-item" data-nm="茌平" data-id="877">
                            茌平
                        </div>



                        <div className="city-item" data-nm="长汀" data-id="954">
                            长汀
                        </div>



                        <div className="city-item" data-nm="城固" data-id="909">
                            城固
                        </div>



                        <div className="city-item" data-nm="赤水" data-id="1018">
                            赤水
                        </div>



                        <div className="city-item" data-nm="常山" data-id="993">
                            常山
                        </div>



                        <div className="city-item" data-nm="长寿" data-id="981">
                            长寿
                        </div>



                        <div className="city-item" data-nm="潮安" data-id="970">
                            潮安
                        </div>



                        <div className="city-item" data-nm="长丰县" data-id="1100">
                            长丰县
                        </div>



                        <div className="city-item" data-nm="茶陵" data-id="1097">
                            茶陵
                        </div>



                        <div className="city-item" data-nm="常宁市" data-id="1092">
                            常宁市
                        </div>



                        <div className="city-item" data-nm="苍溪县" data-id="1150">
                            苍溪县
                        </div>



                        <div className="city-item" data-nm="慈利" data-id="1078">
                            慈利
                        </div>



                        <div className="city-item" data-nm="澄迈县" data-id="1269">
                            澄迈县
                        </div>



                        <div className="city-item" data-nm="长清区" data-id="1157">
                            长清区
                        </div>



                        <div className="city-item" data-nm="崇明区" data-id="1164">
                            崇明区
                        </div>



                        <div className="city-item" data-nm="成武县" data-id="1201">
                            成武县
                        </div>



                        <div className="city-item" data-nm="澄江县" data-id="1205">
                            澄江县
                        </div>



                        <div className="city-item" data-nm="昌江黎族自治县" data-id="1291">
                            昌江黎族自治县
                        </div>


                    </div>

                    <div id="D" className="city-title city-title-letter">
                        D
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="大连" data-id="65">
                            大连
                        </div>



                        <div className="city-item" data-nm="东莞" data-id="91">
                            东莞
                        </div>



                        <div className="city-item" data-nm="大庆" data-id="90">
                            大庆
                        </div>



                        <div className="city-item" data-nm="大同" data-id="129">
                            大同
                        </div>



                        <div className="city-item" data-nm="丹东" data-id="154">
                            丹东
                        </div>



                        <div className="city-item" data-nm="大兴安岭" data-id="178">
                            大兴安岭
                        </div>



                        <div className="city-item" data-nm="东营" data-id="223">
                            东营
                        </div>



                        <div className="city-item" data-nm="德州" data-id="231">
                            德州
                        </div>



                        <div className="city-item" data-nm="德阳" data-id="305">
                            德阳
                        </div>



                        <div className="city-item" data-nm="达州" data-id="315">
                            达州
                        </div>



                        <div className="city-item" data-nm="德宏" data-id="342">
                            德宏
                        </div>



                        <div className="city-item" data-nm="大理" data-id="341">
                            大理
                        </div>



                        <div className="city-item" data-nm="迪庆" data-id="344">
                            迪庆
                        </div>



                        <div className="city-item" data-nm="定西" data-id="370">
                            定西
                        </div>



                        <div className="city-item" data-nm="敦煌" data-id="434">
                            敦煌
                        </div>



                        <div className="city-item" data-nm="丹阳" data-id="431">
                            丹阳
                        </div>



                        <div className="city-item" data-nm="东台" data-id="478">
                            东台
                        </div>



                        <div className="city-item" data-nm="大丰" data-id="477">
                            大丰
                        </div>



                        <div className="city-item" data-nm="德清" data-id="467">
                            德清
                        </div>



                        <div className="city-item" data-nm="东阳" data-id="455">
                            东阳
                        </div>



                        <div className="city-item" data-nm="当阳" data-id="491">
                            当阳
                        </div>



                        <div className="city-item" data-nm="登封" data-id="552">
                            登封
                        </div>



                        <div className="city-item" data-nm="儋州" data-id="571">
                            儋州
                        </div>



                        <div className="city-item" data-nm="东港" data-id="539">
                            东港
                        </div>



                        <div className="city-item" data-nm="东兴" data-id="635">
                            东兴
                        </div>



                        <div className="city-item" data-nm="都江堰" data-id="576">
                            都江堰
                        </div>



                        <div className="city-item" data-nm="大石桥" data-id="599">
                            大石桥
                        </div>



                        <div className="city-item" data-nm="大冶" data-id="600">
                            大冶
                        </div>



                        <div className="city-item" data-nm="东方" data-id="686">
                            东方
                        </div>



                        <div className="city-item" data-nm="大通" data-id="679">
                            大通
                        </div>



                        <div className="city-item" data-nm="灯塔" data-id="651">
                            灯塔
                        </div>



                        <div className="city-item" data-nm="调兵山" data-id="642">
                            调兵山
                        </div>



                        <div className="city-item" data-nm="邓州" data-id="662">
                            邓州
                        </div>



                        <div className="city-item" data-nm="电白" data-id="750">
                            电白
                        </div>



                        <div className="city-item" data-nm="东平" data-id="738">
                            东平
                        </div>



                        <div className="city-item" data-nm="定州" data-id="765">
                            定州
                        </div>



                        <div className="city-item" data-nm="东海" data-id="754">
                            东海
                        </div>



                        <div className="city-item" data-nm="达拉特旗" data-id="874">
                            达拉特旗
                        </div>



                        <div className="city-item" data-nm="郸城" data-id="835">
                            郸城
                        </div>



                        <div className="city-item" data-nm="大荔" data-id="836">
                            大荔
                        </div>



                        <div className="city-item" data-nm="大洼" data-id="945">
                            大洼
                        </div>



                        <div className="city-item" data-nm="大竹" data-id="910">
                            大竹
                        </div>



                        <div className="city-item" data-nm="东光" data-id="999">
                            东光
                        </div>



                        <div className="city-item" data-nm="敦化" data-id="978">
                            敦化
                        </div>



                        <div className="city-item" data-nm="大邑" data-id="971">
                            大邑
                        </div>



                        <div className="city-item" data-nm="砀山" data-id="974">
                            砀山
                        </div>



                        <div className="city-item" data-nm="道县" data-id="1035">
                            道县
                        </div>



                        <div className="city-item" data-nm="大安市" data-id="1076">
                            大安市
                        </div>



                        <div className="city-item" data-nm="大厂回族自治县" data-id="1233">
                            大厂回族自治县
                        </div>



                        <div className="city-item" data-nm="定远县" data-id="1242">
                            定远县
                        </div>



                        <div className="city-item" data-nm="大悟县" data-id="1243">
                            大悟县
                        </div>



                        <div className="city-item" data-nm="德惠市" data-id="1271">
                            德惠市
                        </div>



                        <div className="city-item" data-nm="大足区" data-id="1268">
                            大足区
                        </div>



                        <div className="city-item" data-nm="东坑镇" data-id="1275">
                            东坑镇
                        </div>



                        <div className="city-item" data-nm="定安县" data-id="1168">
                            定安县
                        </div>



                        <div className="city-item" data-nm="垫江" data-id="1177">
                            垫江
                        </div>



                        <div className="city-item" data-nm="东明县" data-id="1203">
                            东明县
                        </div>



                        <div className="city-item" data-nm="定陶区" data-id="1204">
                            定陶区
                        </div>



                        <div className="city-item" data-nm="定边县" data-id="1208">
                            定边县
                        </div>



                        <div className="city-item" data-nm="东阿县" data-id="1285">
                            东阿县
                        </div>


                    </div>

                    <div id="E" className="city-title city-title-letter">
                        E
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="鄂尔多斯" data-id="144">
                            鄂尔多斯
                        </div>



                        <div className="city-item" data-nm="鄂州" data-id="254">
                            鄂州
                        </div>



                        <div className="city-item" data-nm="恩施" data-id="261">
                            恩施
                        </div>



                        <div className="city-item" data-nm="峨眉山" data-id="417">
                            峨眉山
                        </div>



                        <div className="city-item" data-nm="额尔古纳" data-id="568">
                            额尔古纳
                        </div>



                        <div className="city-item" data-nm="恩平" data-id="989">
                            恩平
                        </div>



                        <div className="city-item" data-nm="额敏县" data-id="1172">
                            额敏县
                        </div>


                    </div>

                    <div id="F" className="city-title city-title-letter">
                        F
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="福州" data-id="44">
                            福州
                        </div>



                        <div className="city-item" data-nm="佛山" data-id="92">
                            佛山
                        </div>



                        <div className="city-item" data-nm="抚顺" data-id="152">
                            抚顺
                        </div>



                        <div className="city-item" data-nm="阜新" data-id="156">
                            阜新
                        </div>



                        <div className="city-item" data-nm="阜阳" data-id="200">
                            阜阳
                        </div>



                        <div className="city-item" data-nm="抚州" data-id="220">
                            抚州
                        </div>



                        <div className="city-item" data-nm="防城港" data-id="293">
                            防城港
                        </div>



                        <div className="city-item" data-nm="涪陵" data-id="427">
                            涪陵
                        </div>



                        <div className="city-item" data-nm="富阳" data-id="416">
                            富阳
                        </div>



                        <div className="city-item" data-nm="福清" data-id="462">
                            福清
                        </div>



                        <div className="city-item" data-nm="凤凰" data-id="480">
                            凤凰
                        </div>



                        <div className="city-item" data-nm="肥城" data-id="545">
                            肥城
                        </div>



                        <div className="city-item" data-nm="阜宁" data-id="535">
                            阜宁
                        </div>



                        <div className="city-item" data-nm="奉化" data-id="540">
                            奉化
                        </div>



                        <div className="city-item" data-nm="汾阳" data-id="677">
                            汾阳
                        </div>



                        <div className="city-item" data-nm="阜康" data-id="689">
                            阜康
                        </div>



                        <div className="city-item" data-nm="凤城" data-id="665">
                            凤城
                        </div>



                        <div className="city-item" data-nm="范县" data-id="742">
                            范县
                        </div>



                        <div className="city-item" data-nm="丰城" data-id="735">
                            丰城
                        </div>



                        <div className="city-item" data-nm="封丘" data-id="827">
                            封丘
                        </div>



                        <div className="city-item" data-nm="肥乡区" data-id="792">
                            肥乡区
                        </div>



                        <div className="city-item" data-nm="繁昌" data-id="774">
                            繁昌
                        </div>



                        <div className="city-item" data-nm="富顺" data-id="888">
                            富顺
                        </div>



                        <div className="city-item" data-nm="抚松" data-id="869">
                            抚松
                        </div>



                        <div className="city-item" data-nm="丰县" data-id="862">
                            丰县
                        </div>



                        <div className="city-item" data-nm="扶风" data-id="861">
                            扶风
                        </div>



                        <div className="city-item" data-nm="扶沟" data-id="937">
                            扶沟
                        </div>



                        <div className="city-item" data-nm="丰宁" data-id="924">
                            丰宁
                        </div>



                        <div className="city-item" data-nm="佛冈" data-id="921">
                            佛冈
                        </div>



                        <div className="city-item" data-nm="费县" data-id="916">
                            费县
                        </div>



                        <div className="city-item" data-nm="凤台" data-id="980">
                            凤台
                        </div>



                        <div className="city-item" data-nm="肥西县" data-id="1142">
                            肥西县
                        </div>



                        <div className="city-item" data-nm="奉新" data-id="1031">
                            奉新
                        </div>



                        <div className="city-item" data-nm="方城" data-id="1052">
                            方城
                        </div>



                        <div className="city-item" data-nm="富源县" data-id="1066">
                            富源县
                        </div>



                        <div className="city-item" data-nm="分宜" data-id="1070">
                            分宜
                        </div>



                        <div className="city-item" data-nm="扶绥县" data-id="1084">
                            扶绥县
                        </div>



                        <div className="city-item" data-nm="丰都" data-id="1231">
                            丰都
                        </div>



                        <div className="city-item" data-nm="奉节" data-id="1230">
                            奉节
                        </div>



                        <div className="city-item" data-nm="肥东县" data-id="1241">
                            肥东县
                        </div>



                        <div className="city-item" data-nm="凤翔县" data-id="1152">
                            凤翔县
                        </div>



                        <div className="city-item" data-nm="福安" data-id="1195">
                            福安
                        </div>



                        <div className="city-item" data-nm="福鼎市" data-id="1202">
                            福鼎市
                        </div>



                        <div className="city-item" data-nm="府谷县" data-id="1209">
                            府谷县
                        </div>


                    </div>

                    <div id="G" className="city-title city-title-letter">
                        G
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="广州" data-id="20">
                            广州
                        </div>



                        <div className="city-item" data-nm="桂林" data-id="93">
                            桂林
                        </div>



                        <div className="city-item" data-nm="贵阳" data-id="107">
                            贵阳
                        </div>



                        <div className="city-item" data-nm="赣州" data-id="217">
                            赣州
                        </div>



                        <div className="city-item" data-nm="广元" data-id="307">
                            广元
                        </div>



                        <div className="city-item" data-nm="广安" data-id="314">
                            广安
                        </div>



                        <div className="city-item" data-nm="贵港" data-id="295">
                            贵港
                        </div>



                        <div className="city-item" data-nm="甘孜" data-id="320">
                            甘孜
                        </div>



                        <div className="city-item" data-nm="甘南" data-id="373">
                            甘南
                        </div>



                        <div className="city-item" data-nm="固原" data-id="385">
                            固原
                        </div>



                        <div className="city-item" data-nm="巩义" data-id="553">
                            巩义
                        </div>



                        <div className="city-item" data-nm="桂平" data-id="570">
                            桂平
                        </div>



                        <div className="city-item" data-nm="高邮" data-id="521">
                            高邮
                        </div>



                        <div className="city-item" data-nm="广饶" data-id="541">
                            广饶
                        </div>



                        <div className="city-item" data-nm="高州" data-id="631">
                            高州
                        </div>



                        <div className="city-item" data-nm="个旧" data-id="630">
                            个旧
                        </div>



                        <div className="city-item" data-nm="高碑店" data-id="629">
                            高碑店
                        </div>



                        <div className="city-item" data-nm="盖州" data-id="638">
                            盖州
                        </div>



                        <div className="city-item" data-nm="公主岭" data-id="581">
                            公主岭
                        </div>



                        <div className="city-item" data-nm="高密" data-id="589">
                            高密
                        </div>



                        <div className="city-item" data-nm="广汉" data-id="593">
                            广汉
                        </div>



                        <div className="city-item" data-nm="藁城" data-id="595">
                            藁城
                        </div>



                        <div className="city-item" data-nm="高平" data-id="601">
                            高平
                        </div>



                        <div className="city-item" data-nm="格尔木" data-id="702">
                            格尔木
                        </div>



                        <div className="city-item" data-nm="古交" data-id="691">
                            古交
                        </div>



                        <div className="city-item" data-nm="灌云" data-id="751">
                            灌云
                        </div>



                        <div className="city-item" data-nm="灌南" data-id="752">
                            灌南
                        </div>



                        <div className="city-item" data-nm="赣榆" data-id="753">
                            赣榆
                        </div>



                        <div className="city-item" data-nm="共青城" data-id="787">
                            共青城
                        </div>



                        <div className="city-item" data-nm="高安" data-id="771">
                            高安
                        </div>



                        <div className="city-item" data-nm="广德" data-id="780">
                            广德
                        </div>



                        <div className="city-item" data-nm="高陵" data-id="866">
                            高陵
                        </div>



                        <div className="city-item" data-nm="高阳" data-id="854">
                            高阳
                        </div>



                        <div className="city-item" data-nm="公安" data-id="911">
                            公安
                        </div>



                        <div className="city-item" data-nm="固始县" data-id="1104">
                            固始县
                        </div>



                        <div className="city-item" data-nm="光山县" data-id="1239">
                            光山县
                        </div>



                        <div className="city-item" data-nm="固安县" data-id="1274">
                            固安县
                        </div>



                        <div className="city-item" data-nm="光泽" data-id="1174">
                            光泽
                        </div>



                        <div className="city-item" data-nm="高淳区" data-id="1290">
                            高淳区
                        </div>


                    </div>

                    <div id="H" className="city-title city-title-letter">
                        H
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="杭州" data-id="50">
                            杭州
                        </div>



                        <div className="city-item" data-nm="合肥" data-id="56">
                            合肥
                        </div>



                        <div className="city-item" data-nm="葫芦岛" data-id="95">
                            葫芦岛
                        </div>



                        <div className="city-item" data-nm="海口" data-id="94">
                            海口
                        </div>



                        <div className="city-item" data-nm="哈尔滨" data-id="105">
                            哈尔滨
                        </div>



                        <div className="city-item" data-nm="邯郸" data-id="123">
                            邯郸
                        </div>



                        <div className="city-item" data-nm="呼和浩特" data-id="139">
                            呼和浩特
                        </div>



                        <div className="city-item" data-nm="衡水" data-id="128">
                            衡水
                        </div>



                        <div className="city-item" data-nm="呼伦贝尔" data-id="145">
                            呼伦贝尔
                        </div>



                        <div className="city-item" data-nm="鹤岗" data-id="170">
                            鹤岗
                        </div>



                        <div className="city-item" data-nm="湖州" data-id="186">
                            湖州
                        </div>



                        <div className="city-item" data-nm="黑河" data-id="176">
                            黑河
                        </div>



                        <div className="city-item" data-nm="淮安" data-id="180">
                            淮安
                        </div>



                        <div className="city-item" data-nm="黄山" data-id="198">
                            黄山
                        </div>



                        <div className="city-item" data-nm="淮南" data-id="193">
                            淮南
                        </div>



                        <div className="city-item" data-nm="淮北" data-id="195">
                            淮北
                        </div>



                        <div className="city-item" data-nm="鹤壁" data-id="239">
                            鹤壁
                        </div>



                        <div className="city-item" data-nm="菏泽" data-id="234">
                            菏泽
                        </div>



                        <div className="city-item" data-nm="黄石" data-id="250">
                            黄石
                        </div>



                        <div className="city-item" data-nm="怀化" data-id="273">
                            怀化
                        </div>



                        <div className="city-item" data-nm="惠州" data-id="281">
                            惠州
                        </div>



                        <div className="city-item" data-nm="河源" data-id="284">
                            河源
                        </div>



                        <div className="city-item" data-nm="黄冈" data-id="258">
                            黄冈
                        </div>



                        <div className="city-item" data-nm="衡阳" data-id="265">
                            衡阳
                        </div>



                        <div className="city-item" data-nm="贺州" data-id="298">
                            贺州
                        </div>



                        <div className="city-item" data-nm="河池" data-id="299">
                            河池
                        </div>



                        <div className="city-item" data-nm="红河" data-id="338">
                            红河
                        </div>



                        <div className="city-item" data-nm="海东" data-id="375">
                            海东
                        </div>



                        <div className="city-item" data-nm="海西" data-id="381">
                            海西
                        </div>



                        <div className="city-item" data-nm="黄南" data-id="377">
                            黄南
                        </div>



                        <div className="city-item" data-nm="海南州" data-id="378">
                            海南州
                        </div>



                        <div className="city-item" data-nm="汉中" data-id="357">
                            汉中
                        </div>



                        <div className="city-item" data-nm="和田" data-id="397">
                            和田
                        </div>



                        <div className="city-item" data-nm="哈密" data-id="390">
                            哈密
                        </div>



                        <div className="city-item" data-nm="海宁" data-id="424">
                            海宁
                        </div>



                        <div className="city-item" data-nm="惠阳" data-id="472">
                            惠阳
                        </div>



                        <div className="city-item" data-nm="惠东" data-id="471">
                            惠东
                        </div>



                        <div className="city-item" data-nm="鹤山" data-id="504">
                            鹤山
                        </div>



                        <div className="city-item" data-nm="桦甸" data-id="505">
                            桦甸
                        </div>



                        <div className="city-item" data-nm="海城" data-id="506">
                            海城
                        </div>



                        <div className="city-item" data-nm="华阴" data-id="564">
                            华阴
                        </div>



                        <div className="city-item" data-nm="霸州" data-id="575">
                            霸州
                        </div>



                        <div className="city-item" data-nm="海阳" data-id="573">
                            海阳
                        </div>



                        <div className="city-item" data-nm="海门" data-id="519">
                            海门
                        </div>



                        <div className="city-item" data-nm="海安" data-id="623">
                            海安
                        </div>



                        <div className="city-item" data-nm="侯马" data-id="579">
                            侯马
                        </div>



                        <div className="city-item" data-nm="河津" data-id="598">
                            河津
                        </div>



                        <div className="city-item" data-nm="海林" data-id="685">
                            海林
                        </div>



                        <div className="city-item" data-nm="化州" data-id="672">
                            化州
                        </div>



                        <div className="city-item" data-nm="黄骅" data-id="650">
                            黄骅
                        </div>



                        <div className="city-item" data-nm="霍州" data-id="645">
                            霍州
                        </div>



                        <div className="city-item" data-nm="淮阳" data-id="758">
                            淮阳
                        </div>



                        <div className="city-item" data-nm="合川" data-id="732">
                            合川
                        </div>



                        <div className="city-item" data-nm="海盐" data-id="726">
                            海盐
                        </div>



                        <div className="city-item" data-nm="滑县" data-id="816">
                            滑县
                        </div>



                        <div className="city-item" data-nm="惠安" data-id="825">
                            惠安
                        </div>



                        <div className="city-item" data-nm="怀仁市" data-id="806">
                            怀仁市
                        </div>



                        <div className="city-item" data-nm="辉县" data-id="800">
                            辉县
                        </div>



                        <div className="city-item" data-nm="户县" data-id="799">
                            户县
                        </div>



                        <div className="city-item" data-nm="和县" data-id="794">
                            和县
                        </div>



                        <div className="city-item" data-nm="含山" data-id="793">
                            含山
                        </div>



                        <div className="city-item" data-nm="汉阴" data-id="772">
                            汉阴
                        </div>



                        <div className="city-item" data-nm="河口" data-id="881">
                            河口
                        </div>



                        <div className="city-item" data-nm="辉南" data-id="894">
                            辉南
                        </div>



                        <div className="city-item" data-nm="洪洞" data-id="867">
                            洪洞
                        </div>



                        <div className="city-item" data-nm="横店" data-id="851">
                            横店
                        </div>



                        <div className="city-item" data-nm="华亭市" data-id="856">
                            华亭市
                        </div>



                        <div className="city-item" data-nm="韩城" data-id="832">
                            韩城
                        </div>



                        <div className="city-item" data-nm="洪湖" data-id="928">
                            洪湖
                        </div>



                        <div className="city-item" data-nm="怀宁" data-id="1005">
                            怀宁
                        </div>



                        <div className="city-item" data-nm="珲春" data-id="977">
                            珲春
                        </div>



                        <div className="city-item" data-nm="霍邱" data-id="975">
                            霍邱
                        </div>



                        <div className="city-item" data-nm="海沧" data-id="964">
                            海沧
                        </div>



                        <div className="city-item" data-nm="潢川县" data-id="1103">
                            潢川县
                        </div>



                        <div className="city-item" data-nm="衡阳县" data-id="1088">
                            衡阳县
                        </div>



                        <div className="city-item" data-nm="衡山县" data-id="1090">
                            衡山县
                        </div>



                        <div className="city-item" data-nm="衡东县" data-id="1091">
                            衡东县
                        </div>



                        <div className="city-item" data-nm="贺兰县" data-id="1105">
                            贺兰县
                        </div>



                        <div className="city-item" data-nm="海伦市" data-id="1130">
                            海伦市
                        </div>



                        <div className="city-item" data-nm="汉南区" data-id="1124">
                            汉南区
                        </div>



                        <div className="city-item" data-nm="合江县" data-id="1145">
                            合江县
                        </div>



                        <div className="city-item" data-nm="怀远县" data-id="1042">
                            怀远县
                        </div>



                        <div className="city-item" data-nm="会泽县" data-id="1065">
                            会泽县
                        </div>



                        <div className="city-item" data-nm="河间市" data-id="1080">
                            河间市
                        </div>



                        <div className="city-item" data-nm="合浦县" data-id="1086">
                            合浦县
                        </div>



                        <div className="city-item" data-nm="横山区" data-id="1234">
                            横山区
                        </div>



                        <div className="city-item" data-nm="环县" data-id="1185">
                            环县
                        </div>



                        <div className="city-item" data-nm="黄陵县" data-id="1206">
                            黄陵县
                        </div>



                        <div className="city-item" data-nm="华容" data-id="8001">
                            华容
                        </div>


                    </div>

                    <div id="J" className="city-title city-title-letter">
                        J
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="锦州" data-id="98">
                            锦州
                        </div>



                        <div className="city-item" data-nm="济南" data-id="96">
                            济南
                        </div>



                        <div className="city-item" data-nm="焦作" data-id="97">
                            焦作
                        </div>



                        <div className="city-item" data-nm="九江" data-id="115">
                            九江
                        </div>



                        <div className="city-item" data-nm="晋城" data-id="132">
                            晋城
                        </div>



                        <div className="city-item" data-nm="晋中" data-id="134">
                            晋中
                        </div>



                        <div className="city-item" data-nm="鸡西" data-id="169">
                            鸡西
                        </div>



                        <div className="city-item" data-nm="佳木斯" data-id="173">
                            佳木斯
                        </div>



                        <div className="city-item" data-nm="吉林" data-id="161">
                            吉林
                        </div>



                        <div className="city-item" data-nm="嘉兴" data-id="185">
                            嘉兴
                        </div>



                        <div className="city-item" data-nm="金华" data-id="188">
                            金华
                        </div>



                        <div className="city-item" data-nm="吉安" data-id="218">
                            吉安
                        </div>



                        <div className="city-item" data-nm="景德镇" data-id="213">
                            景德镇
                        </div>



                        <div className="city-item" data-nm="济宁" data-id="225">
                            济宁
                        </div>



                        <div className="city-item" data-nm="荆门" data-id="255">
                            荆门
                        </div>



                        <div className="city-item" data-nm="济源" data-id="249">
                            济源
                        </div>



                        <div className="city-item" data-nm="江门" data-id="277">
                            江门
                        </div>



                        <div className="city-item" data-nm="荆州" data-id="257">
                            荆州
                        </div>



                        <div className="city-item" data-nm="揭阳" data-id="288">
                            揭阳
                        </div>



                        <div className="city-item" data-nm="酒泉" data-id="368">
                            酒泉
                        </div>



                        <div className="city-item" data-nm="金昌" data-id="362">
                            金昌
                        </div>



                        <div className="city-item" data-nm="嘉峪关" data-id="409">
                            嘉峪关
                        </div>



                        <div className="city-item" data-nm="江阴" data-id="404">
                            江阴
                        </div>



                        <div className="city-item" data-nm="靖江" data-id="439">
                            靖江
                        </div>



                        <div className="city-item" data-nm="晋江市" data-id="420">
                            晋江市
                        </div>



                        <div className="city-item" data-nm="金坛" data-id="460">
                            金坛
                        </div>



                        <div className="city-item" data-nm="江山" data-id="510">
                            江山
                        </div>



                        <div className="city-item" data-nm="嘉善" data-id="489">
                            嘉善
                        </div>



                        <div className="city-item" data-nm="井冈山" data-id="485">
                            井冈山
                        </div>



                        <div className="city-item" data-nm="晋州" data-id="544">
                            晋州
                        </div>



                        <div className="city-item" data-nm="句容" data-id="515">
                            句容
                        </div>



                        <div className="city-item" data-nm="建湖" data-id="536">
                            建湖
                        </div>



                        <div className="city-item" data-nm="介休" data-id="636">
                            介休
                        </div>



                        <div className="city-item" data-nm="胶州" data-id="583">
                            胶州
                        </div>



                        <div className="city-item" data-nm="建德" data-id="594">
                            建德
                        </div>



                        <div className="city-item" data-nm="简阳" data-id="605">
                            简阳
                        </div>



                        <div className="city-item" data-nm="集安" data-id="678">
                            集安
                        </div>



                        <div className="city-item" data-nm="即墨" data-id="664">
                            即墨
                        </div>



                        <div className="city-item" data-nm="建阳" data-id="756">
                            建阳
                        </div>



                        <div className="city-item" data-nm="蛟河" data-id="725">
                            蛟河
                        </div>



                        <div className="city-item" data-nm="监利" data-id="831">
                            监利
                        </div>



                        <div className="city-item" data-nm="金堂" data-id="788">
                            金堂
                        </div>



                        <div className="city-item" data-nm="郏县" data-id="785">
                            郏县
                        </div>



                        <div className="city-item" data-nm="巨野" data-id="882">
                            巨野
                        </div>



                        <div className="city-item" data-nm="江津" data-id="871">
                            江津
                        </div>



                        <div className="city-item" data-nm="金湖" data-id="956">
                            金湖
                        </div>



                        <div className="city-item" data-nm="江都" data-id="948">
                            江都
                        </div>



                        <div className="city-item" data-nm="莒南" data-id="941">
                            莒南
                        </div>



                        <div className="city-item" data-nm="江油" data-id="927">
                            江油
                        </div>



                        <div className="city-item" data-nm="京山市" data-id="918">
                            京山市
                        </div>



                        <div className="city-item" data-nm="缙云" data-id="913">
                            缙云
                        </div>



                        <div className="city-item" data-nm="金乡" data-id="900">
                            金乡
                        </div>



                        <div className="city-item" data-nm="嘉祥" data-id="899">
                            嘉祥
                        </div>



                        <div className="city-item" data-nm="金沙" data-id="1001">
                            金沙
                        </div>



                        <div className="city-item" data-nm="泾县" data-id="1003">
                            泾县
                        </div>



                        <div className="city-item" data-nm="集美" data-id="963">
                            集美
                        </div>



                        <div className="city-item" data-nm="鄄城县" data-id="1134">
                            鄄城县
                        </div>



                        <div className="city-item" data-nm="靖边" data-id="1146">
                            靖边
                        </div>



                        <div className="city-item" data-nm="江川县" data-id="1032">
                            江川县
                        </div>



                        <div className="city-item" data-nm="江华瑶族自治县" data-id="1038">
                            江华瑶族自治县
                        </div>



                        <div className="city-item" data-nm="吉安县" data-id="1028">
                            吉安县
                        </div>



                        <div className="city-item" data-nm="吉水县" data-id="1029">
                            吉水县
                        </div>



                        <div className="city-item" data-nm="晋宁区" data-id="1059">
                            晋宁区
                        </div>



                        <div className="city-item" data-nm="江永" data-id="1061">
                            江永
                        </div>



                        <div className="city-item" data-nm="建水县" data-id="1085">
                            建水县
                        </div>



                        <div className="city-item" data-nm="九台" data-id="1263">
                            九台
                        </div>



                        <div className="city-item" data-nm="嘉鱼县" data-id="1153">
                            嘉鱼县
                        </div>



                        <div className="city-item" data-nm="精河县" data-id="1194">
                            精河县
                        </div>



                        <div className="city-item" data-nm="靖西市" data-id="1197">
                            靖西市
                        </div>



                        <div className="city-item" data-nm="泾阳县" data-id="1288">
                            泾阳县
                        </div>


                    </div>

                    <div id="K" className="city-title city-title-letter">
                        K
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="昆明" data-id="114">
                            昆明
                        </div>



                        <div className="city-item" data-nm="开封" data-id="235">
                            开封
                        </div>



                        <div className="city-item" data-nm="昆山" data-id="403">
                            昆山
                        </div>



                        <div className="city-item" data-nm="喀什地区" data-id="396">
                            喀什地区
                        </div>



                        <div className="city-item" data-nm="克拉玛依" data-id="388">
                            克拉玛依
                        </div>



                        <div className="city-item" data-nm="凯里" data-id="473">
                            凯里
                        </div>



                        <div className="city-item" data-nm="开平" data-id="502">
                            开平
                        </div>



                        <div className="city-item" data-nm="库尔勒" data-id="603">
                            库尔勒
                        </div>



                        <div className="city-item" data-nm="奎屯" data-id="643">
                            奎屯
                        </div>



                        <div className="city-item" data-nm="开州区" data-id="748">
                            开州区
                        </div>



                        <div className="city-item" data-nm="垦利" data-id="880">
                            垦利
                        </div>



                        <div className="city-item" data-nm="宽城" data-id="925">
                            宽城
                        </div>



                        <div className="city-item" data-nm="开阳" data-id="1002">
                            开阳
                        </div>



                        <div className="city-item" data-nm="开化" data-id="990">
                            开化
                        </div>



                        <div className="city-item" data-nm="康县" data-id="1227">
                            康县
                        </div>



                        <div className="city-item" data-nm="开远市" data-id="1293">
                            开远市
                        </div>


                    </div>

                    <div id="L" className="city-title city-title-letter">
                        L
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="廊坊" data-id="106">
                            廊坊
                        </div>



                        <div className="city-item" data-nm="临汾" data-id="137">
                            临汾
                        </div>



                        <div className="city-item" data-nm="吕梁" data-id="138">
                            吕梁
                        </div>



                        <div className="city-item" data-nm="辽阳" data-id="157">
                            辽阳
                        </div>



                        <div className="city-item" data-nm="辽源" data-id="163">
                            辽源
                        </div>



                        <div className="city-item" data-nm="连云港" data-id="179">
                            连云港
                        </div>



                        <div className="city-item" data-nm="六安" data-id="203">
                            六安
                        </div>



                        <div className="city-item" data-nm="丽水" data-id="192">
                            丽水
                        </div>



                        <div className="city-item" data-nm="龙岩" data-id="211">
                            龙岩
                        </div>



                        <div className="city-item" data-nm="洛阳" data-id="236">
                            洛阳
                        </div>



                        <div className="city-item" data-nm="聊城" data-id="232">
                            聊城
                        </div>



                        <div className="city-item" data-nm="临沂" data-id="230">
                            临沂
                        </div>



                        <div className="city-item" data-nm="莱芜" data-id="229">
                            莱芜
                        </div>



                        <div className="city-item" data-nm="漯河" data-id="242">
                            漯河
                        </div>



                        <div className="city-item" data-nm="娄底" data-id="274">
                            娄底
                        </div>



                        <div className="city-item" data-nm="泸州" data-id="304">
                            泸州
                        </div>



                        <div className="city-item" data-nm="乐山" data-id="310">
                            乐山
                        </div>



                        <div className="city-item" data-nm="柳州" data-id="290">
                            柳州
                        </div>



                        <div className="city-item" data-nm="来宾" data-id="300">
                            来宾
                        </div>



                        <div className="city-item" data-nm="临沧" data-id="336">
                            临沧
                        </div>



                        <div className="city-item" data-nm="林芝" data-id="351">
                            林芝
                        </div>



                        <div className="city-item" data-nm="拉萨" data-id="345">
                            拉萨
                        </div>



                        <div className="city-item" data-nm="六盘水" data-id="322">
                            六盘水
                        </div>



                        <div className="city-item" data-nm="凉山" data-id="321">
                            凉山
                        </div>



                        <div className="city-item" data-nm="丽江" data-id="334">
                            丽江
                        </div>



                        <div className="city-item" data-nm="临夏" data-id="372">
                            临夏
                        </div>



                        <div className="city-item" data-nm="陇南" data-id="371">
                            陇南
                        </div>



                        <div className="city-item" data-nm="兰州" data-id="361">
                            兰州
                        </div>



                        <div className="city-item" data-nm="兰溪" data-id="476">
                            兰溪
                        </div>



                        <div className="city-item" data-nm="临海" data-id="461">
                            临海
                        </div>



                        <div className="city-item" data-nm="溧阳" data-id="450">
                            溧阳
                        </div>



                        <div className="city-item" data-nm="耒阳" data-id="509">
                            耒阳
                        </div>



                        <div className="city-item" data-nm="龙口" data-id="492">
                            龙口
                        </div>



                        <div className="city-item" data-nm="陆丰" data-id="567">
                            陆丰
                        </div>



                        <div className="city-item" data-nm="莱阳" data-id="561">
                            莱阳
                        </div>



                        <div className="city-item" data-nm="乐昌" data-id="513">
                            乐昌
                        </div>



                        <div className="city-item" data-nm="莱州" data-id="529">
                            莱州
                        </div>



                        <div className="city-item" data-nm="临安" data-id="542">
                            临安
                        </div>



                        <div className="city-item" data-nm="临清" data-id="537">
                            临清
                        </div>



                        <div className="city-item" data-nm="乐陵" data-id="611">
                            乐陵
                        </div>



                        <div className="city-item" data-nm="龙海" data-id="618">
                            龙海
                        </div>



                        <div className="city-item" data-nm="醴陵" data-id="619">
                            醴陵
                        </div>



                        <div className="city-item" data-nm="浏阳" data-id="617">
                            浏阳
                        </div>



                        <div className="city-item" data-nm="莱西" data-id="620">
                            莱西
                        </div>



                        <div className="city-item" data-nm="廉江" data-id="628">
                            廉江
                        </div>



                        <div className="city-item" data-nm="阆中" data-id="634">
                            阆中
                        </div>



                        <div className="city-item" data-nm="乐平" data-id="632">
                            乐平
                        </div>



                        <div className="city-item" data-nm="灵宝" data-id="596">
                            灵宝
                        </div>



                        <div className="city-item" data-nm="冷水江" data-id="606">
                            冷水江
                        </div>



                        <div className="city-item" data-nm="连州" data-id="683">
                            连州
                        </div>



                        <div className="city-item" data-nm="灵山" data-id="675">
                            灵山
                        </div>



                        <div className="city-item" data-nm="滦南" data-id="674">
                            滦南
                        </div>



                        <div className="city-item" data-nm="临江" data-id="690">
                            临江
                        </div>



                        <div className="city-item" data-nm="陵水" data-id="688">
                            陵水
                        </div>



                        <div className="city-item" data-nm="鹿泉" data-id="652">
                            鹿泉
                        </div>



                        <div className="city-item" data-nm="利川" data-id="655">
                            利川
                        </div>



                        <div className="city-item" data-nm="凌海" data-id="670">
                            凌海
                        </div>



                        <div className="city-item" data-nm="老河口" data-id="659">
                            老河口
                        </div>



                        <div className="city-item" data-nm="滦州市" data-id="745">
                            滦州市
                        </div>



                        <div className="city-item" data-nm="乐亭" data-id="744">
                            乐亭
                        </div>



                        <div className="city-item" data-nm="临朐" data-id="739">
                            临朐
                        </div>



                        <div className="city-item" data-nm="栾城" data-id="766">
                            栾城
                        </div>



                        <div className="city-item" data-nm="连江" data-id="724">
                            连江
                        </div>



                        <div className="city-item" data-nm="隆昌市" data-id="823">
                            隆昌市
                        </div>



                        <div className="city-item" data-nm="林州" data-id="815">
                            林州
                        </div>



                        <div className="city-item" data-nm="临潼" data-id="808">
                            临潼
                        </div>



                        <div className="city-item" data-nm="蓝田" data-id="809">
                            蓝田
                        </div>



                        <div className="city-item" data-nm="临漳" data-id="791">
                            临漳
                        </div>



                        <div className="city-item" data-nm="灵石" data-id="789">
                            灵石
                        </div>



                        <div className="city-item" data-nm="鲁山" data-id="786">
                            鲁山
                        </div>



                        <div className="city-item" data-nm="临猗" data-id="889">
                            临猗
                        </div>



                        <div className="city-item" data-nm="柳河" data-id="868">
                            柳河
                        </div>



                        <div className="city-item" data-nm="鹿邑" data-id="839">
                            鹿邑
                        </div>



                        <div className="city-item" data-nm="临沭" data-id="951">
                            临沭
                        </div>



                        <div className="city-item" data-nm="兰陵" data-id="939">
                            兰陵
                        </div>



                        <div className="city-item" data-nm="龙游" data-id="938">
                            龙游
                        </div>



                        <div className="city-item" data-nm="栾川" data-id="935">
                            栾川
                        </div>



                        <div className="city-item" data-nm="雷州" data-id="934">
                            雷州
                        </div>



                        <div className="city-item" data-nm="隆尧" data-id="930">
                            隆尧
                        </div>



                        <div className="city-item" data-nm="陵川" data-id="919">
                            陵川
                        </div>



                        <div className="city-item" data-nm="龙泉" data-id="912">
                            龙泉
                        </div>



                        <div className="city-item" data-nm="临邑" data-id="905">
                            临邑
                        </div>



                        <div className="city-item" data-nm="利津" data-id="902">
                            利津
                        </div>



                        <div className="city-item" data-nm="梁山" data-id="896">
                            梁山
                        </div>



                        <div className="city-item" data-nm="澧县" data-id="1010">
                            澧县
                        </div>



                        <div className="city-item" data-nm="辽中" data-id="1011">
                            辽中
                        </div>



                        <div className="city-item" data-nm="涟水" data-id="976">
                            涟水
                        </div>



                        <div className="city-item" data-nm="临澧" data-id="1119">
                            临澧
                        </div>



                        <div className="city-item" data-nm="兰考县" data-id="1110">
                            兰考县
                        </div>



                        <div className="city-item" data-nm="灵丘县" data-id="1133">
                            灵丘县
                        </div>



                        <div className="city-item" data-nm="利辛" data-id="1121">
                            利辛
                        </div>



                        <div className="city-item" data-nm="洛川县" data-id="1147">
                            洛川县
                        </div>



                        <div className="city-item" data-nm="泸县" data-id="1144">
                            泸县
                        </div>



                        <div className="city-item" data-nm="溧水区" data-id="1143">
                            溧水区
                        </div>



                        <div className="city-item" data-nm="禄丰县" data-id="1138">
                            禄丰县
                        </div>



                        <div className="city-item" data-nm="罗平县" data-id="1034">
                            罗平县
                        </div>



                        <div className="city-item" data-nm="涟源市" data-id="1037">
                            涟源市
                        </div>



                        <div className="city-item" data-nm="庐江县" data-id="1040">
                            庐江县
                        </div>



                        <div className="city-item" data-nm="隆回" data-id="1064">
                            隆回
                        </div>



                        <div className="city-item" data-nm="临颍" data-id="1056">
                            临颍
                        </div>



                        <div className="city-item" data-nm="蓝山" data-id="1060">
                            蓝山
                        </div>



                        <div className="city-item" data-nm="隆化县" data-id="1083">
                            隆化县
                        </div>



                        <div className="city-item" data-nm="洛宁" data-id="1087">
                            洛宁
                        </div>



                        <div className="city-item" data-nm="芦溪" data-id="1073">
                            芦溪
                        </div>



                        <div className="city-item" data-nm="卢氏县" data-id="1079">
                            卢氏县
                        </div>



                        <div className="city-item" data-nm="陆川县" data-id="1225">
                            陆川县
                        </div>



                        <div className="city-item" data-nm="临泉县" data-id="1247">
                            临泉县
                        </div>



                        <div className="city-item" data-nm="禄劝彝族苗族自治县" data-id="1254">
                            禄劝彝族苗族自治县
                        </div>



                        <div className="city-item" data-nm="罗定市" data-id="1163">
                            罗定市
                        </div>



                        <div className="city-item" data-nm="乐东" data-id="1171">
                            乐东
                        </div>



                        <div className="city-item" data-nm="梁平" data-id="1178">
                            梁平
                        </div>



                        <div className="city-item" data-nm="临高县" data-id="1183">
                            临高县
                        </div>



                        <div className="city-item" data-nm="罗源县" data-id="1184">
                            罗源县
                        </div>



                        <div className="city-item" data-nm="灵武市" data-id="1281">
                            灵武市
                        </div>


                    </div>

                    <div id="M" className="city-title city-title-letter">
                        M
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="牡丹江" data-id="175">
                            牡丹江
                        </div>



                        <div className="city-item" data-nm="马鞍山" data-id="194">
                            马鞍山
                        </div>



                        <div className="city-item" data-nm="茂名" data-id="279">
                            茂名
                        </div>



                        <div className="city-item" data-nm="梅州" data-id="282">
                            梅州
                        </div>



                        <div className="city-item" data-nm="绵阳" data-id="306">
                            绵阳
                        </div>



                        <div className="city-item" data-nm="眉山" data-id="312">
                            眉山
                        </div>



                        <div className="city-item" data-nm="密山" data-id="566">
                            密山
                        </div>



                        <div className="city-item" data-nm="漠河" data-id="563">
                            漠河
                        </div>



                        <div className="city-item" data-nm="满洲里" data-id="572">
                            满洲里
                        </div>



                        <div className="city-item" data-nm="明光" data-id="610">
                            明光
                        </div>



                        <div className="city-item" data-nm="梅河口" data-id="584">
                            梅河口
                        </div>



                        <div className="city-item" data-nm="汨罗" data-id="590">
                            汨罗
                        </div>



                        <div className="city-item" data-nm="孟州" data-id="694">
                            孟州
                        </div>



                        <div className="city-item" data-nm="麻城" data-id="668">
                            麻城
                        </div>



                        <div className="city-item" data-nm="渑池" data-id="872">
                            渑池
                        </div>



                        <div className="city-item" data-nm="眉县" data-id="848">
                            眉县
                        </div>



                        <div className="city-item" data-nm="民权" data-id="860">
                            民权
                        </div>



                        <div className="city-item" data-nm="孟津" data-id="838">
                            孟津
                        </div>



                        <div className="city-item" data-nm="牟平" data-id="846">
                            牟平
                        </div>



                        <div className="city-item" data-nm="蒙阴" data-id="944">
                            蒙阴
                        </div>



                        <div className="city-item" data-nm="绵竹" data-id="906">
                            绵竹
                        </div>



                        <div className="city-item" data-nm="蒙自市" data-id="1116">
                            蒙自市
                        </div>



                        <div className="city-item" data-nm="蒙城" data-id="1122">
                            蒙城
                        </div>



                        <div className="city-item" data-nm="明水县" data-id="1222">
                            明水县
                        </div>



                        <div className="city-item" data-nm="米易县" data-id="1216">
                            米易县
                        </div>



                        <div className="city-item" data-nm="闽侯县" data-id="1219">
                            闽侯县
                        </div>



                        <div className="city-item" data-nm="勐腊县" data-id="1210">
                            勐腊县
                        </div>



                        <div className="city-item" data-nm="门头沟区" data-id="1283">
                            门头沟区
                        </div>


                    </div>

                    <div id="N" className="city-title city-title-letter">
                        N
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="宁波" data-id="51">
                            宁波
                        </div>



                        <div className="city-item" data-nm="南京" data-id="55">
                            南京
                        </div>



                        <div className="city-item" data-nm="南昌" data-id="83">
                            南昌
                        </div>



                        <div className="city-item" data-nm="南通" data-id="82">
                            南通
                        </div>



                        <div className="city-item" data-nm="南宁" data-id="99">
                            南宁
                        </div>



                        <div className="city-item" data-nm="宁德" data-id="212">
                            宁德
                        </div>



                        <div className="city-item" data-nm="南平" data-id="210">
                            南平
                        </div>



                        <div className="city-item" data-nm="南阳" data-id="244">
                            南阳
                        </div>



                        <div className="city-item" data-nm="内江" data-id="309">
                            内江
                        </div>



                        <div className="city-item" data-nm="南充" data-id="311">
                            南充
                        </div>



                        <div className="city-item" data-nm="怒江" data-id="343">
                            怒江
                        </div>



                        <div className="city-item" data-nm="南沙" data-id="547">
                            南沙
                        </div>



                        <div className="city-item" data-nm="宁海" data-id="512">
                            宁海
                        </div>



                        <div className="city-item" data-nm="宁乡" data-id="520">
                            宁乡
                        </div>



                        <div className="city-item" data-nm="南安" data-id="621">
                            南安
                        </div>



                        <div className="city-item" data-nm="南雄" data-id="687">
                            南雄
                        </div>



                        <div className="city-item" data-nm="讷河" data-id="682">
                            讷河
                        </div>



                        <div className="city-item" data-nm="南乐" data-id="741">
                            南乐
                        </div>



                        <div className="city-item" data-nm="宁津" data-id="820">
                            宁津
                        </div>



                        <div className="city-item" data-nm="宁晋" data-id="813">
                            宁晋
                        </div>



                        <div className="city-item" data-nm="南陵" data-id="775">
                            南陵
                        </div>



                        <div className="city-item" data-nm="宁国" data-id="781">
                            宁国
                        </div>



                        <div className="city-item" data-nm="宁阳" data-id="779">
                            宁阳
                        </div>



                        <div className="city-item" data-nm="内丘" data-id="931">
                            内丘
                        </div>



                        <div className="city-item" data-nm="南和" data-id="1013">
                            南和
                        </div>



                        <div className="city-item" data-nm="内黄" data-id="979">
                            内黄
                        </div>



                        <div className="city-item" data-nm="宁陵" data-id="1112">
                            宁陵
                        </div>



                        <div className="city-item" data-nm="南郑区" data-id="1125">
                            南郑区
                        </div>



                        <div className="city-item" data-nm="南部县" data-id="1053">
                            南部县
                        </div>



                        <div className="city-item" data-nm="南皮县" data-id="1075">
                            南皮县
                        </div>



                        <div className="city-item" data-nm="宁远县" data-id="1224">
                            宁远县
                        </div>



                        <div className="city-item" data-nm="南川" data-id="1264">
                            南川
                        </div>



                        <div className="city-item" data-nm="嫩江县" data-id="1166">
                            嫩江县
                        </div>


                    </div>

                    <div id="P" className="city-title city-title-letter">
                        P
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="盘锦" data-id="158">
                            盘锦
                        </div>



                        <div className="city-item" data-nm="莆田" data-id="207">
                            莆田
                        </div>



                        <div className="city-item" data-nm="萍乡" data-id="214">
                            萍乡
                        </div>



                        <div className="city-item" data-nm="平顶山" data-id="237">
                            平顶山
                        </div>



                        <div className="city-item" data-nm="濮阳" data-id="240">
                            濮阳
                        </div>



                        <div className="city-item" data-nm="攀枝花" data-id="303">
                            攀枝花
                        </div>



                        <div className="city-item" data-nm="普洱" data-id="335">
                            普洱
                        </div>



                        <div className="city-item" data-nm="平凉" data-id="367">
                            平凉
                        </div>



                        <div className="city-item" data-nm="邳州" data-id="493">
                            邳州
                        </div>



                        <div className="city-item" data-nm="普宁" data-id="546">
                            普宁
                        </div>



                        <div className="city-item" data-nm="平湖" data-id="524">
                            平湖
                        </div>



                        <div className="city-item" data-nm="平度" data-id="582">
                            平度
                        </div>



                        <div className="city-item" data-nm="彭州" data-id="585">
                            彭州
                        </div>



                        <div className="city-item" data-nm="蓬莱" data-id="587">
                            蓬莱
                        </div>



                        <div className="city-item" data-nm="鄱阳" data-id="701">
                            鄱阳
                        </div>



                        <div className="city-item" data-nm="磐石" data-id="761">
                            磐石
                        </div>



                        <div className="city-item" data-nm="浦江" data-id="730">
                            浦江
                        </div>



                        <div className="city-item" data-nm="平潭" data-id="805">
                            平潭
                        </div>



                        <div className="city-item" data-nm="平原" data-id="777">
                            平原
                        </div>



                        <div className="city-item" data-nm="平山" data-id="893">
                            平山
                        </div>



                        <div className="city-item" data-nm="濮阳县" data-id="849">
                            濮阳县
                        </div>



                        <div className="city-item" data-nm="沛县" data-id="833">
                            沛县
                        </div>



                        <div className="city-item" data-nm="蒲城" data-id="837">
                            蒲城
                        </div>



                        <div className="city-item" data-nm="盘州市" data-id="842">
                            盘州市
                        </div>



                        <div className="city-item" data-nm="平江" data-id="847">
                            平江
                        </div>



                        <div className="city-item" data-nm="平邑" data-id="950">
                            平邑
                        </div>



                        <div className="city-item" data-nm="平遥" data-id="987">
                            平遥
                        </div>



                        <div className="city-item" data-nm="平果" data-id="991">
                            平果
                        </div>



                        <div className="city-item" data-nm="平阳" data-id="972">
                            平阳
                        </div>



                        <div className="city-item" data-nm="平舆" data-id="960">
                            平舆
                        </div>



                        <div className="city-item" data-nm="平罗县" data-id="1106">
                            平罗县
                        </div>



                        <div className="city-item" data-nm="平南县" data-id="1226">
                            平南县
                        </div>



                        <div className="city-item" data-nm="彭水苗族土家族自治县" data-id="1232">
                            彭水苗族土家族自治县
                        </div>



                        <div className="city-item" data-nm="普兰店" data-id="1258">
                            普兰店
                        </div>



                        <div className="city-item" data-nm="平阴县" data-id="1156">
                            平阴县
                        </div>



                        <div className="city-item" data-nm="平陆县" data-id="1175">
                            平陆县
                        </div>



                        <div className="city-item" data-nm="平昌县" data-id="1214">
                            平昌县
                        </div>


                    </div>

                    <div id="Q" className="city-title city-title-letter">
                        Q
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="青岛" data-id="60">
                            青岛
                        </div>



                        <div className="city-item" data-nm="泉州" data-id="110">
                            泉州
                        </div>



                        <div className="city-item" data-nm="齐齐哈尔" data-id="109">
                            齐齐哈尔
                        </div>



                        <div className="city-item" data-nm="秦皇岛" data-id="122">
                            秦皇岛
                        </div>



                        <div className="city-item" data-nm="七台河" data-id="174">
                            七台河
                        </div>



                        <div className="city-item" data-nm="衢州" data-id="189">
                            衢州
                        </div>



                        <div className="city-item" data-nm="清远" data-id="286">
                            清远
                        </div>



                        <div className="city-item" data-nm="钦州" data-id="294">
                            钦州
                        </div>



                        <div className="city-item" data-nm="黔西南" data-id="326">
                            黔西南
                        </div>



                        <div className="city-item" data-nm="曲靖" data-id="330">
                            曲靖
                        </div>



                        <div className="city-item" data-nm="黔东南" data-id="328">
                            黔东南
                        </div>



                        <div className="city-item" data-nm="黔南" data-id="329">
                            黔南
                        </div>



                        <div className="city-item" data-nm="庆阳" data-id="369">
                            庆阳
                        </div>



                        <div className="city-item" data-nm="迁安" data-id="430">
                            迁安
                        </div>



                        <div className="city-item" data-nm="琼海" data-id="418">
                            琼海
                        </div>



                        <div className="city-item" data-nm="曲阜" data-id="507">
                            曲阜
                        </div>



                        <div className="city-item" data-nm="启东" data-id="500">
                            启东
                        </div>



                        <div className="city-item" data-nm="青州" data-id="496">
                            青州
                        </div>



                        <div className="city-item" data-nm="潜江" data-id="550">
                            潜江
                        </div>



                        <div className="city-item" data-nm="沁阳" data-id="644">
                            沁阳
                        </div>



                        <div className="city-item" data-nm="邛崃" data-id="647">
                            邛崃
                        </div>



                        <div className="city-item" data-nm="清丰" data-id="740">
                            清丰
                        </div>



                        <div className="city-item" data-nm="齐河" data-id="727">
                            齐河
                        </div>



                        <div className="city-item" data-nm="淇县" data-id="864">
                            淇县
                        </div>



                        <div className="city-item" data-nm="全椒" data-id="865">
                            全椒
                        </div>



                        <div className="city-item" data-nm="清河" data-id="929">
                            清河
                        </div>



                        <div className="city-item" data-nm="青田" data-id="922">
                            青田
                        </div>



                        <div className="city-item" data-nm="栖霞" data-id="914">
                            栖霞
                        </div>



                        <div className="city-item" data-nm="青县" data-id="1020">
                            青县
                        </div>



                        <div className="city-item" data-nm="潜山市" data-id="1004">
                            潜山市
                        </div>



                        <div className="city-item" data-nm="庆云" data-id="998">
                            庆云
                        </div>



                        <div className="city-item" data-nm="祁东县" data-id="1089">
                            祁东县
                        </div>



                        <div className="city-item" data-nm="杞县" data-id="1115">
                            杞县
                        </div>



                        <div className="city-item" data-nm="庆安县" data-id="1107">
                            庆安县
                        </div>



                        <div className="city-item" data-nm="青冈县" data-id="1131">
                            青冈县
                        </div>



                        <div className="city-item" data-nm="岐山县" data-id="1139">
                            岐山县
                        </div>



                        <div className="city-item" data-nm="青阳县" data-id="1220">
                            青阳县
                        </div>



                        <div className="city-item" data-nm="清镇" data-id="1260">
                            清镇
                        </div>



                        <div className="city-item" data-nm="清徐" data-id="1266">
                            清徐
                        </div>



                        <div className="city-item" data-nm="迁西县" data-id="1267">
                            迁西县
                        </div>



                        <div className="city-item" data-nm="綦江" data-id="1265">
                            綦江
                        </div>



                        <div className="city-item" data-nm="企石镇" data-id="1276">
                            企石镇
                        </div>



                        <div className="city-item" data-nm="琼中" data-id="1170">
                            琼中
                        </div>



                        <div className="city-item" data-nm="祁县" data-id="1188">
                            祁县
                        </div>



                        <div className="city-item" data-nm="黔江区" data-id="1287">
                            黔江区
                        </div>



                        <div className="city-item" data-nm="青铜峡市" data-id="1284">
                            青铜峡市
                        </div>


                    </div>

                    <div id="R" className="city-title city-title-letter">
                        R
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="日照" data-id="228">
                            日照
                        </div>



                        <div className="city-item" data-nm="日喀则" data-id="348">
                            日喀则
                        </div>



                        <div className="city-item" data-nm="仁怀" data-id="475">
                            仁怀
                        </div>



                        <div className="city-item" data-nm="瑞安" data-id="469">
                            瑞安
                        </div>



                        <div className="city-item" data-nm="如皋" data-id="501">
                            如皋
                        </div>



                        <div className="city-item" data-nm="荣成" data-id="497">
                            荣成
                        </div>



                        <div className="city-item" data-nm="乳山" data-id="499">
                            乳山
                        </div>



                        <div className="city-item" data-nm="汝州" data-id="616">
                            汝州
                        </div>



                        <div className="city-item" data-nm="瑞金" data-id="639">
                            瑞金
                        </div>



                        <div className="city-item" data-nm="瑞昌" data-id="657">
                            瑞昌
                        </div>



                        <div className="city-item" data-nm="仁寿" data-id="749">
                            仁寿
                        </div>



                        <div className="city-item" data-nm="任丘" data-id="917">
                            任丘
                        </div>



                        <div className="city-item" data-nm="如东" data-id="988">
                            如东
                        </div>



                        <div className="city-item" data-nm="汝阳" data-id="966">
                            汝阳
                        </div>



                        <div className="city-item" data-nm="容县" data-id="1101">
                            容县
                        </div>



                        <div className="city-item" data-nm="汝城县" data-id="1095">
                            汝城县
                        </div>



                        <div className="city-item" data-nm="荣昌区" data-id="1114">
                            荣昌区
                        </div>



                        <div className="city-item" data-nm="瑞丽" data-id="1262">
                            瑞丽
                        </div>


                    </div>

                    <div id="S" className="city-title city-title-letter">
                        S
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="上海" data-id="10">
                            上海
                        </div>



                        <div className="city-item" data-nm="深圳" data-id="30">
                            深圳
                        </div>



                        <div className="city-item" data-nm="沈阳" data-id="66">
                            沈阳
                        </div>



                        <div className="city-item" data-nm="石家庄" data-id="76">
                            石家庄
                        </div>



                        <div className="city-item" data-nm="苏州" data-id="80">
                            苏州
                        </div>



                        <div className="city-item" data-nm="三亚" data-id="111">
                            三亚
                        </div>



                        <div className="city-item" data-nm="汕头" data-id="117">
                            汕头
                        </div>



                        <div className="city-item" data-nm="朔州" data-id="133">
                            朔州
                        </div>



                        <div className="city-item" data-nm="双鸭山" data-id="171">
                            双鸭山
                        </div>



                        <div className="city-item" data-nm="四平" data-id="162">
                            四平
                        </div>



                        <div className="city-item" data-nm="松原" data-id="166">
                            松原
                        </div>



                        <div className="city-item" data-nm="绍兴" data-id="187">
                            绍兴
                        </div>



                        <div className="city-item" data-nm="宿迁" data-id="184">
                            宿迁
                        </div>



                        <div className="city-item" data-nm="绥化" data-id="177">
                            绥化
                        </div>



                        <div className="city-item" data-nm="宿州" data-id="201">
                            宿州
                        </div>



                        <div className="city-item" data-nm="上饶" data-id="221">
                            上饶
                        </div>



                        <div className="city-item" data-nm="三明" data-id="208">
                            三明
                        </div>



                        <div className="city-item" data-nm="十堰" data-id="251">
                            十堰
                        </div>



                        <div className="city-item" data-nm="商丘" data-id="245">
                            商丘
                        </div>



                        <div className="city-item" data-nm="三门峡" data-id="243">
                            三门峡
                        </div>



                        <div className="city-item" data-nm="韶关" data-id="276">
                            韶关
                        </div>



                        <div className="city-item" data-nm="汕尾" data-id="283">
                            汕尾
                        </div>



                        <div className="city-item" data-nm="随州" data-id="260">
                            随州
                        </div>



                        <div className="city-item" data-nm="邵阳" data-id="266">
                            邵阳
                        </div>



                        <div className="city-item" data-nm="遂宁" data-id="308">
                            遂宁
                        </div>



                        <div className="city-item" data-nm="石嘴山" data-id="383">
                            石嘴山
                        </div>



                        <div className="city-item" data-nm="商洛" data-id="360">
                            商洛
                        </div>



                        <div className="city-item" data-nm="石河子" data-id="408">
                            石河子
                        </div>



                        <div className="city-item" data-nm="顺德" data-id="406">
                            顺德
                        </div>



                        <div className="city-item" data-nm="石狮" data-id="440">
                            石狮
                        </div>



                        <div className="city-item" data-nm="上虞" data-id="456">
                            上虞
                        </div>



                        <div className="city-item" data-nm="寿光" data-id="495">
                            寿光
                        </div>



                        <div className="city-item" data-nm="神农架" data-id="487">
                            神农架
                        </div>



                        <div className="city-item" data-nm="韶山" data-id="569">
                            韶山
                        </div>



                        <div className="city-item" data-nm="射阳" data-id="532">
                            射阳
                        </div>



                        <div className="city-item" data-nm="沭阳" data-id="531">
                            沭阳
                        </div>



                        <div className="city-item" data-nm="嵊州" data-id="530">
                            嵊州
                        </div>



                        <div className="city-item" data-nm="三河" data-id="538">
                            三河
                        </div>



                        <div className="city-item" data-nm="沙河" data-id="613">
                            沙河
                        </div>



                        <div className="city-item" data-nm="四会" data-id="633">
                            四会
                        </div>



                        <div className="city-item" data-nm="松滋" data-id="648">
                            松滋
                        </div>



                        <div className="city-item" data-nm="舒兰" data-id="669">
                            舒兰
                        </div>



                        <div className="city-item" data-nm="邵东" data-id="736">
                            邵东
                        </div>



                        <div className="city-item" data-nm="沙湾" data-id="762">
                            沙湾
                        </div>



                        <div className="city-item" data-nm="泗阳" data-id="760">
                            泗阳
                        </div>



                        <div className="city-item" data-nm="睢县" data-id="755">
                            睢县
                        </div>



                        <div className="city-item" data-nm="石泉" data-id="819">
                            石泉
                        </div>



                        <div className="city-item" data-nm="单县" data-id="830">
                            单县
                        </div>



                        <div className="city-item" data-nm="泗洪" data-id="824">
                            泗洪
                        </div>



                        <div className="city-item" data-nm="上高" data-id="804">
                            上高
                        </div>



                        <div className="city-item" data-nm="绥中" data-id="797">
                            绥中
                        </div>



                        <div className="city-item" data-nm="神木市" data-id="796">
                            神木市
                        </div>



                        <div className="city-item" data-nm="涉县" data-id="768">
                            涉县
                        </div>



                        <div className="city-item" data-nm="上蔡" data-id="886">
                            上蔡
                        </div>



                        <div className="city-item" data-nm="遂昌" data-id="895">
                            遂昌
                        </div>



                        <div className="city-item" data-nm="睢宁" data-id="875">
                            睢宁
                        </div>



                        <div className="city-item" data-nm="沈丘" data-id="840">
                            沈丘
                        </div>



                        <div className="city-item" data-nm="三门" data-id="845">
                            三门
                        </div>



                        <div className="city-item" data-nm="什邡" data-id="953">
                            什邡
                        </div>



                        <div className="city-item" data-nm="上杭" data-id="955">
                            上杭
                        </div>



                        <div className="city-item" data-nm="石岛" data-id="907">
                            石岛
                        </div>



                        <div className="city-item" data-nm="泗水" data-id="1017">
                            泗水
                        </div>



                        <div className="city-item" data-nm="社旗" data-id="1022">
                            社旗
                        </div>



                        <div className="city-item" data-nm="商河" data-id="1015">
                            商河
                        </div>



                        <div className="city-item" data-nm="射洪" data-id="992">
                            射洪
                        </div>



                        <div className="city-item" data-nm="舒城" data-id="982">
                            舒城
                        </div>



                        <div className="city-item" data-nm="嵩县" data-id="965">
                            嵩县
                        </div>



                        <div className="city-item" data-nm="石门" data-id="1118">
                            石门
                        </div>



                        <div className="city-item" data-nm="桑植" data-id="1113">
                            桑植
                        </div>



                        <div className="city-item" data-nm="商城县" data-id="1108">
                            商城县
                        </div>



                        <div className="city-item" data-nm="鄯善县" data-id="1120">
                            鄯善县
                        </div>



                        <div className="city-item" data-nm="深州市" data-id="1039">
                            深州市
                        </div>



                        <div className="city-item" data-nm="泗县" data-id="1024">
                            泗县
                        </div>



                        <div className="city-item" data-nm="商水县" data-id="1055">
                            商水县
                        </div>



                        <div className="city-item" data-nm="上林县" data-id="1045">
                            上林县
                        </div>



                        <div className="city-item" data-nm="遂川" data-id="1067">
                            遂川
                        </div>



                        <div className="city-item" data-nm="上栗" data-id="1071">
                            上栗
                        </div>



                        <div className="city-item" data-nm="双峰" data-id="1062">
                            双峰
                        </div>



                        <div className="city-item" data-nm="肃宁县" data-id="1081">
                            肃宁县
                        </div>



                        <div className="city-item" data-nm="莎车县" data-id="1077">
                            莎车县
                        </div>



                        <div className="city-item" data-nm="山丹县" data-id="1228">
                            山丹县
                        </div>



                        <div className="city-item" data-nm="绥宁县" data-id="1240">
                            绥宁县
                        </div>



                        <div className="city-item" data-nm="遂平" data-id="1250">
                            遂平
                        </div>



                        <div className="city-item" data-nm="双城" data-id="1249">
                            双城
                        </div>



                        <div className="city-item" data-nm="嵩明县" data-id="1270">
                            嵩明县
                        </div>



                        <div className="city-item" data-nm="石林彝族自治县" data-id="1272">
                            石林彝族自治县
                        </div>



                        <div className="city-item" data-nm="绥德县" data-id="1155">
                            绥德县
                        </div>



                        <div className="city-item" data-nm="沙县" data-id="1158">
                            沙县
                        </div>



                        <div className="city-item" data-nm="深泽县" data-id="1176">
                            深泽县
                        </div>



                        <div className="city-item" data-nm="石柱" data-id="1180">
                            石柱
                        </div>



                        <div className="city-item" data-nm="邵武" data-id="1189">
                            邵武
                        </div>



                        <div className="city-item" data-nm="寿县" data-id="1192">
                            寿县
                        </div>



                        <div className="city-item" data-nm="三台县" data-id="1211">
                            三台县
                        </div>



                        <div className="city-item" data-nm="三原县" data-id="1289">
                            三原县
                        </div>



                        <div className="city-item" data-nm="莘县" data-id="1286">
                            莘县
                        </div>


                    </div>

                    <div id="T" className="city-title city-title-letter">
                        T
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="天津" data-id="40">
                            天津
                        </div>



                        <div className="city-item" data-nm="太原" data-id="101">
                            太原
                        </div>



                        <div className="city-item" data-nm="唐山" data-id="121">
                            唐山
                        </div>



                        <div className="city-item" data-nm="通辽" data-id="143">
                            通辽
                        </div>



                        <div className="city-item" data-nm="铁岭" data-id="159">
                            铁岭
                        </div>



                        <div className="city-item" data-nm="通化" data-id="164">
                            通化
                        </div>



                        <div className="city-item" data-nm="台州" data-id="191">
                            台州
                        </div>



                        <div className="city-item" data-nm="泰州" data-id="183">
                            泰州
                        </div>



                        <div className="city-item" data-nm="铜陵" data-id="196">
                            铜陵
                        </div>



                        <div className="city-item" data-nm="泰安" data-id="226">
                            泰安
                        </div>



                        <div className="city-item" data-nm="铜仁" data-id="325">
                            铜仁
                        </div>



                        <div className="city-item" data-nm="铜川" data-id="352">
                            铜川
                        </div>



                        <div className="city-item" data-nm="天水" data-id="364">
                            天水
                        </div>



                        <div className="city-item" data-nm="塔城" data-id="399">
                            塔城
                        </div>



                        <div className="city-item" data-nm="吐鲁番" data-id="389">
                            吐鲁番
                        </div>



                        <div className="city-item" data-nm="太仓" data-id="432">
                            太仓
                        </div>



                        <div className="city-item" data-nm="桐乡" data-id="425">
                            桐乡
                        </div>



                        <div className="city-item" data-nm="台山" data-id="503">
                            台山
                        </div>



                        <div className="city-item" data-nm="腾冲" data-id="482">
                            腾冲
                        </div>



                        <div className="city-item" data-nm="滕州" data-id="549">
                            滕州
                        </div>



                        <div className="city-item" data-nm="桐庐" data-id="554">
                            桐庐
                        </div>



                        <div className="city-item" data-nm="泰兴" data-id="518">
                            泰兴
                        </div>



                        <div className="city-item" data-nm="天长" data-id="626">
                            天长
                        </div>



                        <div className="city-item" data-nm="天门" data-id="578">
                            天门
                        </div>



                        <div className="city-item" data-nm="桐城" data-id="673">
                            桐城
                        </div>



                        <div className="city-item" data-nm="洮南" data-id="666">
                            洮南
                        </div>



                        <div className="city-item" data-nm="台前" data-id="743">
                            台前
                        </div>



                        <div className="city-item" data-nm="太和" data-id="759">
                            太和
                        </div>



                        <div className="city-item" data-nm="汤阴" data-id="817">
                            汤阴
                        </div>



                        <div className="city-item" data-nm="藤县" data-id="812">
                            藤县
                        </div>



                        <div className="city-item" data-nm="太谷" data-id="790">
                            太谷
                        </div>



                        <div className="city-item" data-nm="天台" data-id="782">
                            天台
                        </div>



                        <div className="city-item" data-nm="土默特右旗" data-id="879">
                            土默特右旗
                        </div>



                        <div className="city-item" data-nm="铜梁" data-id="947">
                            铜梁
                        </div>



                        <div className="city-item" data-nm="郯城" data-id="942">
                            郯城
                        </div>



                        <div className="city-item" data-nm="桃源" data-id="1009">
                            桃源
                        </div>



                        <div className="city-item" data-nm="同安" data-id="962">
                            同安
                        </div>



                        <div className="city-item" data-nm="通许县" data-id="1111">
                            通许县
                        </div>



                        <div className="city-item" data-nm="通榆县" data-id="1135">
                            通榆县
                        </div>



                        <div className="city-item" data-nm="通海县" data-id="1132">
                            通海县
                        </div>



                        <div className="city-item" data-nm="唐河" data-id="1136">
                            唐河
                        </div>



                        <div className="city-item" data-nm="泰和县" data-id="1030">
                            泰和县
                        </div>



                        <div className="city-item" data-nm="太康县" data-id="1054">
                            太康县
                        </div>



                        <div className="city-item" data-nm="铜鼓" data-id="1041">
                            铜鼓
                        </div>



                        <div className="city-item" data-nm="田东县" data-id="1044">
                            田东县
                        </div>



                        <div className="city-item" data-nm="屯昌县" data-id="1256">
                            屯昌县
                        </div>



                        <div className="city-item" data-nm="通江县" data-id="1215">
                            通江县
                        </div>


                    </div>

                    <div id="W" className="city-title city-title-letter">
                        W
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="无锡" data-id="52">
                            无锡
                        </div>



                        <div className="city-item" data-nm="武汉" data-id="57">
                            武汉
                        </div>



                        <div className="city-item" data-nm="芜湖" data-id="102">
                            芜湖
                        </div>



                        <div className="city-item" data-nm="温州" data-id="112">
                            温州
                        </div>



                        <div className="city-item" data-nm="乌海" data-id="141">
                            乌海
                        </div>



                        <div className="city-item" data-nm="乌兰察布" data-id="147">
                            乌兰察布
                        </div>



                        <div className="city-item" data-nm="威海" data-id="227">
                            威海
                        </div>



                        <div className="city-item" data-nm="潍坊" data-id="224">
                            潍坊
                        </div>



                        <div className="city-item" data-nm="梧州" data-id="291">
                            梧州
                        </div>



                        <div className="city-item" data-nm="文山" data-id="339">
                            文山
                        </div>



                        <div className="city-item" data-nm="渭南" data-id="355">
                            渭南
                        </div>



                        <div className="city-item" data-nm="武威" data-id="365">
                            武威
                        </div>



                        <div className="city-item" data-nm="乌鲁木齐" data-id="387">
                            乌鲁木齐
                        </div>



                        <div className="city-item" data-nm="吴忠" data-id="384">
                            吴忠
                        </div>



                        <div className="city-item" data-nm="武夷山" data-id="443">
                            武夷山
                        </div>



                        <div className="city-item" data-nm="吴江" data-id="433">
                            吴江
                        </div>



                        <div className="city-item" data-nm="万州" data-id="428">
                            万州
                        </div>



                        <div className="city-item" data-nm="婺源" data-id="479">
                            婺源
                        </div>



                        <div className="city-item" data-nm="温岭" data-id="457">
                            温岭
                        </div>



                        <div className="city-item" data-nm="武安" data-id="449">
                            武安
                        </div>



                        <div className="city-item" data-nm="文登" data-id="498">
                            文登
                        </div>



                        <div className="city-item" data-nm="武当山" data-id="486">
                            武当山
                        </div>



                        <div className="city-item" data-nm="乌镇" data-id="551">
                            乌镇
                        </div>



                        <div className="city-item" data-nm="吴川" data-id="592">
                            吴川
                        </div>



                        <div className="city-item" data-nm="文昌" data-id="607">
                            文昌
                        </div>



                        <div className="city-item" data-nm="舞钢" data-id="684">
                            舞钢
                        </div>



                        <div className="city-item" data-nm="万宁" data-id="680">
                            万宁
                        </div>



                        <div className="city-item" data-nm="温县" data-id="696">
                            温县
                        </div>



                        <div className="city-item" data-nm="武陟" data-id="697">
                            武陟
                        </div>



                        <div className="city-item" data-nm="武穴" data-id="667">
                            武穴
                        </div>



                        <div className="city-item" data-nm="乌苏" data-id="747">
                            乌苏
                        </div>



                        <div className="city-item" data-nm="卫辉" data-id="826">
                            卫辉
                        </div>



                        <div className="city-item" data-nm="芜湖县" data-id="773">
                            芜湖县
                        </div>



                        <div className="city-item" data-nm="无为" data-id="769">
                            无为
                        </div>



                        <div className="city-item" data-nm="乌拉特前旗" data-id="850">
                            乌拉特前旗
                        </div>



                        <div className="city-item" data-nm="围场" data-id="926">
                            围场
                        </div>



                        <div className="city-item" data-nm="武城" data-id="904">
                            武城
                        </div>



                        <div className="city-item" data-nm="汶上" data-id="898">
                            汶上
                        </div>



                        <div className="city-item" data-nm="微山" data-id="897">
                            微山
                        </div>



                        <div className="city-item" data-nm="无极" data-id="1019">
                            无极
                        </div>



                        <div className="city-item" data-nm="万荣" data-id="1023">
                            万荣
                        </div>



                        <div className="city-item" data-nm="舞阳" data-id="1014">
                            舞阳
                        </div>



                        <div className="city-item" data-nm="威宁" data-id="1006">
                            威宁
                        </div>



                        <div className="city-item" data-nm="武鸣" data-id="995">
                            武鸣
                        </div>



                        <div className="city-item" data-nm="武义" data-id="973">
                            武义
                        </div>



                        <div className="city-item" data-nm="瓦房店" data-id="967">
                            瓦房店
                        </div>



                        <div className="city-item" data-nm="尉氏县" data-id="1109">
                            尉氏县
                        </div>



                        <div className="city-item" data-nm="武隆县" data-id="1128">
                            武隆县
                        </div>



                        <div className="city-item" data-nm="万载" data-id="1025">
                            万载
                        </div>



                        <div className="city-item" data-nm="武平县" data-id="1049">
                            武平县
                        </div>



                        <div className="city-item" data-nm="威县" data-id="1046">
                            威县
                        </div>



                        <div className="city-item" data-nm="武冈市" data-id="1223">
                            武冈市
                        </div>



                        <div className="city-item" data-nm="望奎县" data-id="1217">
                            望奎县
                        </div>



                        <div className="city-item" data-nm="武定" data-id="1255">
                            武定
                        </div>



                        <div className="city-item" data-nm="五常市" data-id="1187">
                            五常市
                        </div>



                        <div className="city-item" data-nm="旺苍县" data-id="1207">
                            旺苍县
                        </div>


                    </div>

                    <div id="X" className="city-title city-title-letter">
                        X
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="西安" data-id="42">
                            西安
                        </div>



                        <div className="city-item" data-nm="厦门" data-id="62">
                            厦门
                        </div>



                        <div className="city-item" data-nm="新乡" data-id="103">
                            新乡
                        </div>



                        <div className="city-item" data-nm="徐州" data-id="119">
                            徐州
                        </div>



                        <div className="city-item" data-nm="邢台" data-id="124">
                            邢台
                        </div>



                        <div className="city-item" data-nm="忻州" data-id="136">
                            忻州
                        </div>



                        <div className="city-item" data-nm="兴安盟" data-id="148">
                            兴安盟
                        </div>



                        <div className="city-item" data-nm="锡林郭勒" data-id="149">
                            锡林郭勒
                        </div>



                        <div className="city-item" data-nm="宣城" data-id="206">
                            宣城
                        </div>



                        <div className="city-item" data-nm="新余" data-id="215">
                            新余
                        </div>



                        <div className="city-item" data-nm="襄阳" data-id="253">
                            襄阳
                        </div>



                        <div className="city-item" data-nm="信阳" data-id="246">
                            信阳
                        </div>



                        <div className="city-item" data-nm="许昌" data-id="241">
                            许昌
                        </div>



                        <div className="city-item" data-nm="湘西" data-id="275">
                            湘西
                        </div>



                        <div className="city-item" data-nm="咸宁" data-id="259">
                            咸宁
                        </div>



                        <div className="city-item" data-nm="孝感" data-id="256">
                            孝感
                        </div>



                        <div className="city-item" data-nm="湘潭" data-id="264">
                            湘潭
                        </div>



                        <div className="city-item" data-nm="西双版纳" data-id="340">
                            西双版纳
                        </div>



                        <div className="city-item" data-nm="西宁" data-id="374">
                            西宁
                        </div>



                        <div className="city-item" data-nm="咸阳" data-id="354">
                            咸阳
                        </div>



                        <div className="city-item" data-nm="仙桃" data-id="412">
                            仙桃
                        </div>



                        <div className="city-item" data-nm="香格里拉" data-id="484">
                            香格里拉
                        </div>



                        <div className="city-item" data-nm="新沂" data-id="548">
                            新沂
                        </div>



                        <div className="city-item" data-nm="新密" data-id="556">
                            新密
                        </div>



                        <div className="city-item" data-nm="荥阳" data-id="557">
                            荥阳
                        </div>



                        <div className="city-item" data-nm="新郑" data-id="555">
                            新郑
                        </div>



                        <div className="city-item" data-nm="兴宁" data-id="562">
                            兴宁
                        </div>



                        <div className="city-item" data-nm="西塘" data-id="560">
                            西塘
                        </div>



                        <div className="city-item" data-nm="新民" data-id="574">
                            新民
                        </div>



                        <div className="city-item" data-nm="兴化" data-id="517">
                            兴化
                        </div>



                        <div className="city-item" data-nm="湘阴" data-id="525">
                            湘阴
                        </div>



                        <div className="city-item" data-nm="新泰" data-id="523">
                            新泰
                        </div>



                        <div className="city-item" data-nm="响水" data-id="534">
                            响水
                        </div>



                        <div className="city-item" data-nm="辛集" data-id="543">
                            辛集
                        </div>



                        <div className="city-item" data-nm="湘乡" data-id="614">
                            湘乡
                        </div>



                        <div className="city-item" data-nm="项城" data-id="580">
                            项城
                        </div>



                        <div className="city-item" data-nm="孝义" data-id="604">
                            孝义
                        </div>



                        <div className="city-item" data-nm="修武" data-id="695">
                            修武
                        </div>



                        <div className="city-item" data-nm="象山" data-id="692">
                            象山
                        </div>



                        <div className="city-item" data-nm="兴城" data-id="641">
                            兴城
                        </div>



                        <div className="city-item" data-nm="仙居" data-id="764">
                            仙居
                        </div>



                        <div className="city-item" data-nm="夏津" data-id="728">
                            夏津
                        </div>



                        <div className="city-item" data-nm="信宜" data-id="729">
                            信宜
                        </div>



                        <div className="city-item" data-nm="新化" data-id="734">
                            新化
                        </div>



                        <div className="city-item" data-nm="新安" data-id="818">
                            新安
                        </div>



                        <div className="city-item" data-nm="新乡县" data-id="828">
                            新乡县
                        </div>



                        <div className="city-item" data-nm="宣威" data-id="802">
                            宣威
                        </div>



                        <div className="city-item" data-nm="霞浦" data-id="810">
                            霞浦
                        </div>



                        <div className="city-item" data-nm="襄垣" data-id="776">
                            襄垣
                        </div>



                        <div className="city-item" data-nm="西平" data-id="885">
                            西平
                        </div>



                        <div className="city-item" data-nm="新乐" data-id="892">
                            新乐
                        </div>



                        <div className="city-item" data-nm="西乡" data-id="870">
                            西乡
                        </div>



                        <div className="city-item" data-nm="徐闻" data-id="853">
                            徐闻
                        </div>



                        <div className="city-item" data-nm="夏邑" data-id="857">
                            夏邑
                        </div>



                        <div className="city-item" data-nm="浚县" data-id="863">
                            浚县
                        </div>



                        <div className="city-item" data-nm="盱眙" data-id="843">
                            盱眙
                        </div>



                        <div className="city-item" data-nm="香河" data-id="957">
                            香河
                        </div>



                        <div className="city-item" data-nm="信丰" data-id="959">
                            信丰
                        </div>



                        <div className="city-item" data-nm="浠水" data-id="949">
                            浠水
                        </div>



                        <div className="city-item" data-nm="西华" data-id="936">
                            西华
                        </div>



                        <div className="city-item" data-nm="薛城" data-id="920">
                            薛城
                        </div>



                        <div className="city-item" data-nm="新昌" data-id="903">
                            新昌
                        </div>



                        <div className="city-item" data-nm="淅川" data-id="1021">
                            淅川
                        </div>



                        <div className="city-item" data-nm="溆浦" data-id="996">
                            溆浦
                        </div>



                        <div className="city-item" data-nm="新蔡" data-id="961">
                            新蔡
                        </div>



                        <div className="city-item" data-nm="秀山土家族苗族自治县" data-id="1129">
                            秀山土家族苗族自治县
                        </div>



                        <div className="city-item" data-nm="新洲区" data-id="1123">
                            新洲区
                        </div>



                        <div className="city-item" data-nm="仙游县" data-id="1149">
                            仙游县
                        </div>



                        <div className="city-item" data-nm="新野" data-id="1137">
                            新野
                        </div>



                        <div className="city-item" data-nm="兴国县" data-id="1033">
                            兴国县
                        </div>



                        <div className="city-item" data-nm="新田" data-id="1036">
                            新田
                        </div>



                        <div className="city-item" data-nm="新干" data-id="1026">
                            新干
                        </div>



                        <div className="city-item" data-nm="祥云县" data-id="1051">
                            祥云县
                        </div>



                        <div className="city-item" data-nm="寻乌县" data-id="1050">
                            寻乌县
                        </div>



                        <div className="city-item" data-nm="襄城县" data-id="1057">
                            襄城县
                        </div>



                        <div className="city-item" data-nm="新宁" data-id="1063">
                            新宁
                        </div>



                        <div className="city-item" data-nm="献县" data-id="1082">
                            献县
                        </div>



                        <div className="city-item" data-nm="孝昌县" data-id="1244">
                            孝昌县
                        </div>



                        <div className="city-item" data-nm="息县" data-id="1248">
                            息县
                        </div>



                        <div className="city-item" data-nm="萧县" data-id="1261">
                            萧县
                        </div>



                        <div className="city-item" data-nm="谢岗镇" data-id="1277">
                            谢岗镇
                        </div>



                        <div className="city-item" data-nm="新津县" data-id="1167">
                            新津县
                        </div>



                        <div className="city-item" data-nm="旬阳县" data-id="1213">
                            旬阳县
                        </div>


                    </div>

                    <div id="Y" className="city-title city-title-letter">
                        Y
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="烟台" data-id="104">
                            烟台
                        </div>



                        <div className="city-item" data-nm="扬州" data-id="120">
                            扬州
                        </div>



                        <div className="city-item" data-nm="阳泉" data-id="130">
                            阳泉
                        </div>



                        <div className="city-item" data-nm="运城" data-id="135">
                            运城
                        </div>



                        <div className="city-item" data-nm="营口" data-id="155">
                            营口
                        </div>



                        <div className="city-item" data-nm="延边" data-id="168">
                            延边
                        </div>



                        <div className="city-item" data-nm="伊春" data-id="172">
                            伊春
                        </div>



                        <div className="city-item" data-nm="盐城" data-id="181">
                            盐城
                        </div>



                        <div className="city-item" data-nm="鹰潭" data-id="216">
                            鹰潭
                        </div>



                        <div className="city-item" data-nm="宜春" data-id="219">
                            宜春
                        </div>



                        <div className="city-item" data-nm="宜昌" data-id="252">
                            宜昌
                        </div>



                        <div className="city-item" data-nm="永州" data-id="272">
                            永州
                        </div>



                        <div className="city-item" data-nm="阳江" data-id="285">
                            阳江
                        </div>



                        <div className="city-item" data-nm="岳阳" data-id="267">
                            岳阳
                        </div>



                        <div className="city-item" data-nm="益阳" data-id="270">
                            益阳
                        </div>



                        <div className="city-item" data-nm="宜宾" data-id="313">
                            宜宾
                        </div>



                        <div className="city-item" data-nm="雅安" data-id="316">
                            雅安
                        </div>



                        <div className="city-item" data-nm="云浮" data-id="289">
                            云浮
                        </div>



                        <div className="city-item" data-nm="玉林" data-id="296">
                            玉林
                        </div>



                        <div className="city-item" data-nm="玉溪" data-id="331">
                            玉溪
                        </div>



                        <div className="city-item" data-nm="玉树" data-id="380">
                            玉树
                        </div>



                        <div className="city-item" data-nm="银川" data-id="382">
                            银川
                        </div>



                        <div className="city-item" data-nm="延安" data-id="356">
                            延安
                        </div>



                        <div className="city-item" data-nm="榆林" data-id="358">
                            榆林
                        </div>



                        <div className="city-item" data-nm="义乌" data-id="405">
                            义乌
                        </div>



                        <div className="city-item" data-nm="伊犁" data-id="398">
                            伊犁
                        </div>



                        <div className="city-item" data-nm="乐清" data-id="470">
                            乐清
                        </div>



                        <div className="city-item" data-nm="阳朔" data-id="466">
                            阳朔
                        </div>



                        <div className="city-item" data-nm="余姚" data-id="459">
                            余姚
                        </div>



                        <div className="city-item" data-nm="永康" data-id="458">
                            永康
                        </div>



                        <div className="city-item" data-nm="宜兴" data-id="454">
                            宜兴
                        </div>



                        <div className="city-item" data-nm="兖州" data-id="453">
                            兖州
                        </div>



                        <div className="city-item" data-nm="扬中" data-id="559">
                            扬中
                        </div>



                        <div className="city-item" data-nm="伊川" data-id="516">
                            伊川
                        </div>



                        <div className="city-item" data-nm="英德" data-id="514">
                            英德
                        </div>



                        <div className="city-item" data-nm="仪征" data-id="522">
                            仪征
                        </div>



                        <div className="city-item" data-nm="偃师" data-id="528">
                            偃师
                        </div>



                        <div className="city-item" data-nm="禹城" data-id="608">
                            禹城
                        </div>



                        <div className="city-item" data-nm="禹州" data-id="609">
                            禹州
                        </div>



                        <div className="city-item" data-nm="伊宁" data-id="622">
                            伊宁
                        </div>



                        <div className="city-item" data-nm="宜城" data-id="625">
                            宜城
                        </div>



                        <div className="city-item" data-nm="原平" data-id="637">
                            原平
                        </div>



                        <div className="city-item" data-nm="永城" data-id="577">
                            永城
                        </div>



                        <div className="city-item" data-nm="永济" data-id="597">
                            永济
                        </div>



                        <div className="city-item" data-nm="玉环市" data-id="693">
                            玉环市
                        </div>



                        <div className="city-item" data-nm="宜都" data-id="656">
                            宜都
                        </div>



                        <div className="city-item" data-nm="沅江" data-id="658">
                            沅江
                        </div>



                        <div className="city-item" data-nm="永年" data-id="763">
                            永年
                        </div>



                        <div className="city-item" data-nm="永川" data-id="733">
                            永川
                        </div>



                        <div className="city-item" data-nm="阎良" data-id="822">
                            阎良
                        </div>



                        <div className="city-item" data-nm="原阳" data-id="829">
                            原阳
                        </div>



                        <div className="city-item" data-nm="易县" data-id="803">
                            易县
                        </div>



                        <div className="city-item" data-nm="宜阳" data-id="814">
                            宜阳
                        </div>



                        <div className="city-item" data-nm="叶县" data-id="784">
                            叶县
                        </div>



                        <div className="city-item" data-nm="阳城" data-id="770">
                            阳城
                        </div>



                        <div className="city-item" data-nm="云阳" data-id="778">
                            云阳
                        </div>



                        <div className="city-item" data-nm="郓城" data-id="884">
                            郓城
                        </div>



                        <div className="city-item" data-nm="玉山" data-id="876">
                            玉山
                        </div>



                        <div className="city-item" data-nm="阳谷" data-id="878">
                            阳谷
                        </div>



                        <div className="city-item" data-nm="虞城" data-id="859">
                            虞城
                        </div>



                        <div className="city-item" data-nm="于都" data-id="958">
                            于都
                        </div>



                        <div className="city-item" data-nm="沂水" data-id="940">
                            沂水
                        </div>



                        <div className="city-item" data-nm="沂南" data-id="943">
                            沂南
                        </div>



                        <div className="city-item" data-nm="杨陵" data-id="908">
                            杨陵
                        </div>



                        <div className="city-item" data-nm="伊金霍洛旗" data-id="901">
                            伊金霍洛旗
                        </div>



                        <div className="city-item" data-nm="攸县" data-id="1096">
                            攸县
                        </div>



                        <div className="city-item" data-nm="永顺县" data-id="1099">
                            永顺县
                        </div>



                        <div className="city-item" data-nm="永兴县" data-id="1094">
                            永兴县
                        </div>



                        <div className="city-item" data-nm="酉阳土家族苗族自治县" data-id="1127">
                            酉阳土家族苗族自治县
                        </div>



                        <div className="city-item" data-nm="应县" data-id="1151">
                            应县
                        </div>



                        <div className="city-item" data-nm="宜丰" data-id="1027">
                            宜丰
                        </div>



                        <div className="city-item" data-nm="营山县" data-id="1043">
                            营山县
                        </div>



                        <div className="city-item" data-nm="永安" data-id="1047">
                            永安
                        </div>



                        <div className="city-item" data-nm="永丰" data-id="1069">
                            永丰
                        </div>



                        <div className="city-item" data-nm="鄢陵" data-id="1058">
                            鄢陵
                        </div>



                        <div className="city-item" data-nm="永新" data-id="1072">
                            永新
                        </div>



                        <div className="city-item" data-nm="宜良县" data-id="1218">
                            宜良县
                        </div>



                        <div className="city-item" data-nm="玉田县" data-id="1273">
                            玉田县
                        </div>



                        <div className="city-item" data-nm="阳山县" data-id="1159">
                            阳山县
                        </div>



                        <div className="city-item" data-nm="榆树市" data-id="1160">
                            榆树市
                        </div>



                        <div className="city-item" data-nm="沅陵县" data-id="1162">
                            沅陵县
                        </div>



                        <div className="city-item" data-nm="永登县" data-id="1169">
                            永登县
                        </div>



                        <div className="city-item" data-nm="鱼台县" data-id="1181">
                            鱼台县
                        </div>



                        <div className="city-item" data-nm="宜州区" data-id="1182">
                            宜州区
                        </div>



                        <div className="city-item" data-nm="义马市" data-id="1186">
                            义马市
                        </div>



                        <div className="city-item" data-nm="盂县" data-id="1199">
                            盂县
                        </div>



                        <div className="city-item" data-nm="永嘉县" data-id="1198">
                            永嘉县
                        </div>


                    </div>

                    <div id="Z" className="city-title city-title-letter">
                        Z
                    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item" data-nm="郑州" data-id="73">
                            郑州
                        </div>



                        <div className="city-item" data-nm="淄博" data-id="81">
                            淄博
                        </div>



                        <div className="city-item" data-nm="珠海" data-id="108">
                            珠海
                        </div>



                        <div className="city-item" data-nm="中山" data-id="113">
                            中山
                        </div>



                        <div className="city-item" data-nm="张家口" data-id="125">
                            张家口
                        </div>



                        <div className="city-item" data-nm="舟山" data-id="190">
                            舟山
                        </div>



                        <div className="city-item" data-nm="镇江" data-id="182">
                            镇江
                        </div>



                        <div className="city-item" data-nm="枣庄" data-id="222">
                            枣庄
                        </div>



                        <div className="city-item" data-nm="漳州" data-id="209">
                            漳州
                        </div>



                        <div className="city-item" data-nm="驻马店" data-id="248">
                            驻马店
                        </div>



                        <div className="city-item" data-nm="周口" data-id="247">
                            周口
                        </div>



                        <div className="city-item" data-nm="湛江" data-id="278">
                            湛江
                        </div>



                        <div className="city-item" data-nm="肇庆" data-id="280">
                            肇庆
                        </div>



                        <div className="city-item" data-nm="株洲" data-id="263">
                            株洲
                        </div>



                        <div className="city-item" data-nm="张家界" data-id="269">
                            张家界
                        </div>



                        <div className="city-item" data-nm="资阳" data-id="318">
                            资阳
                        </div>



                        <div className="city-item" data-nm="自贡" data-id="302">
                            自贡
                        </div>



                        <div className="city-item" data-nm="遵义" data-id="323">
                            遵义
                        </div>



                        <div className="city-item" data-nm="昭通" data-id="333">
                            昭通
                        </div>



                        <div className="city-item" data-nm="张掖" data-id="366">
                            张掖
                        </div>



                        <div className="city-item" data-nm="中卫" data-id="386">
                            中卫
                        </div>



                        <div className="city-item" data-nm="涿州" data-id="426">
                            涿州
                        </div>



                        <div className="city-item" data-nm="张家港" data-id="419">
                            张家港
                        </div>



                        <div className="city-item" data-nm="诸暨" data-id="468">
                            诸暨
                        </div>



                        <div className="city-item" data-nm="章丘区" data-id="465">
                            章丘区
                        </div>



                        <div className="city-item" data-nm="邹平" data-id="508">
                            邹平
                        </div>



                        <div className="city-item" data-nm="枣阳" data-id="494">
                            枣阳
                        </div>



                        <div className="city-item" data-nm="庄河" data-id="558">
                            庄河
                        </div>



                        <div className="city-item" data-nm="诸城" data-id="526">
                            诸城
                        </div>



                        <div className="city-item" data-nm="钟祥" data-id="612">
                            钟祥
                        </div>



                        <div className="city-item" data-nm="招远" data-id="586">
                            招远
                        </div>



                        <div className="city-item" data-nm="遵化" data-id="591">
                            遵化
                        </div>



                        <div className="city-item" data-nm="枝江" data-id="654">
                            枝江
                        </div>



                        <div className="city-item" data-nm="樟树" data-id="671">
                            樟树
                        </div>



                        <div className="city-item" data-nm="漳浦" data-id="663">
                            漳浦
                        </div>



                        <div className="city-item" data-nm="正定" data-id="757">
                            正定
                        </div>



                        <div className="city-item" data-nm="中牟" data-id="821">
                            中牟
                        </div>



                        <div className="city-item" data-nm="准格尔旗" data-id="891">
                            准格尔旗
                        </div>



                        <div className="city-item" data-nm="柘城" data-id="858">
                            柘城
                        </div>



                        <div className="city-item" data-nm="邹城" data-id="834">
                            邹城
                        </div>



                        <div className="city-item" data-nm="赵县" data-id="841">
                            赵县
                        </div>



                        <div className="city-item" data-nm="织金" data-id="1007">
                            织金
                        </div>



                        <div className="city-item" data-nm="芷江" data-id="997">
                            芷江
                        </div>



                        <div className="city-item" data-nm="周至" data-id="985">
                            周至
                        </div>



                        <div className="city-item" data-nm="资兴市" data-id="1093">
                            资兴市
                        </div>



                        <div className="city-item" data-nm="扎兰屯市" data-id="1140">
                            扎兰屯市
                        </div>



                        <div className="city-item" data-nm="漳平" data-id="1048">
                            漳平
                        </div>



                        <div className="city-item" data-nm="镇雄县" data-id="1246">
                            镇雄县
                        </div>



                        <div className="city-item" data-nm="中宁县" data-id="1259">
                            中宁县
                        </div>



                        <div className="city-item" data-nm="忠县" data-id="1179">
                            忠县
                        </div>



                        <div className="city-item" data-nm="柘荣" data-id="1196">
                            柘荣
                        </div>



                        <div className="city-item" data-nm="中江县" data-id="1200">
                            中江县
                        </div>


                    </div>

                </section>

                <section className="nav-position">
                    <a className="  nav-item" data-id="locate" href={'#locate'}>
                        定位
                    </a>

                    <a className="  nav-item" data-id="history" href={'#history'}>
                        最近
                    </a>

                    <a className="  nav-item" data-id="hot" href={'#hot'}>
                        热门
                    </a>

                    <a className="nav-letter  nav-item" href='#A'>
                        A
                    </a>

                    <a className="nav-letter  nav-item" href='#B'>
                        B
                    </a>

                    <a className="nav-letter  nav-item" href='#C'>
                        C
                    </a>

                    <a className="nav-letter  nav-item" href='#D'>
                        D
                    </a>

                    <a className="nav-letter  nav-item" href='#E'>
                        E
                    </a>

                    <a className="nav-letter  nav-item" href='#F'>
                        F
                    </a>

                    <a className="nav-letter  nav-item" href='#G'>
                        G
                    </a>

                    <a className="nav-letter  nav-item" href='#H'>
                        H
                    </a>

                    <a className="nav-letter  nav-item" href='#J'>
                        J
                    </a>

                    <a className="nav-letter  nav-item" href='#K'>
                        K
                    </a>

                    <a className="nav-letter  nav-item" href='#L'>
                        L
                    </a>

                    <a className="nav-letter  nav-item" href='#M'>
                        M
                    </a>

                    <a className="nav-letter  nav-item" href='#N'>
                        N
                    </a>

                    <a className="nav-letter  nav-item" href='#P'>
                        P
                    </a>

                    <a className="nav-letter  nav-item" href='#Q'>
                        Q
                    </a>

                    <a className="nav-letter  nav-item" href='#R'>
                        R
                    </a>

                    <a className="nav-letter  nav-item" href='#S'>
                        S
                    </a>

                    <a className="nav-letter  nav-item" href='#T'>
                        T
                    </a>

                    <a className="nav-letter  nav-item" href='#W'>
                        W
                    </a>

                    <a className="nav-letter  nav-item" href='#X'>
                        X
                    </a>

                    <a className="nav-letter  nav-item" href='#Y'>
                        Y
                    </a>

                    <a className="nav-letter  nav-item" href='#Z'>
                        Z
                    </a>
                </section>
            </section>
        )
    }
    changeCity(e){
        //事件委托   每点击一次 跳转回  data-id  本地存储   首页
        let index = 0;
        localStorage.cityId = e.target.getAttribute('data-id')
        localStorage.cityName = e.target.innerText
        if(localStorage.cityId === e.target.getAttribute('data-id')){
            let newHis = {
                name:e.target.innerText,
                id:e.target.getAttribute('data-id')
            };
            let hisList = [ ]
            if(localStorage.cityHis){
                 hisList = JSON.parse(localStorage.cityHis)
            }
            for(var i =0;i<hisList.length;i++){
                if(hisList[i].id === newHis.id){
                    hisList.pop(newHis)
                }

            }
            hisList.unshift(newHis);
            localStorage.cityHis = JSON.stringify(hisList.slice(0,3));
            //此处跳转避免了  三个city 一样
            this.props.history.push('/')
        }
    }
}
export  default  withRouter(Position)