# museum2

博物馆2.2发布


## 稳定版v2.2.05_P001@2018-07-09

### 综述

修改停用设备在其他页面不显示



## 稳定版v2.2.05@2018-06-20

### 综述

新增环境场与环境场播放的功能。

评估报告修改

### 新增特性

新增展厅小环境温湿度场

可选择时间段，环境场播放

评估报告增加设备布局图，添加图例单位，部分文字描述，对数据进行基础处理

### 功能改进

无

### 问题修复

无


## 稳定版v2.2.04@2018-5-03

### 综述

首页环境划分，优化页面逻辑和体验。   
实时报警、告警推送、告警开关和配置。   
定时标定。    
评估报告下载。   
元智区域中心接口。   

### 新增特性

实时报警、告警推送、告警开关和配置。  
可以选择每日、每周、每月0时进行定时标定。   
评估报告下载。   
元智区域中心接口
新增二氧化硫、氮氧化物、臭氧参数解析

### 功能改进

首页环境划分，优化页面逻辑和体验。   
设备设置移除多余设置项，修改部分名称及描述信息。
设备事件详情泡泡修改。
消息列小屏时，显示最近发生的事件，而不是后面显示不下就不显示。
设备详情的地图页面显示完全与编辑设备位置。
设备管理页面设备位置缩略图。
整个系统，不出现秒这一时间单位。例如，报警列表页的报警时间和消除报警时间，以及情况说明中的时间均不展现秒。
【设备详情】平滑曲线。
【设备详情】光照传感器调控目标灯光监测值不一致。
QCM赫兹单位精确到个位，不再采用kHz作为单位，且不缩写，增加30天Hz变化数，增添评估标准。

### 问题修复

【全局】Bug修复

### 其他变更

无



## 稳定版v2.2.03@2018-3-29

### 综述

对设备管理板块进行了整体的升级重构，优化页面逻辑和体验。
将设备加入环境对比的环境树，现在可以在【环境详情】页面进行环境和设备的混合对比了。

### 新增特性

【设备管理】重构。

使用组件重构了页面，优化了视觉与操作，增添了备注与消息列，能够第一眼看到各设备的历史情况。

规范了设备操作的形式与项目。

【设备详情】重构。

使用组件重构了页面，优化了视觉与操作，针对每一种设备进行了单独的设计，优化设备信息板块，增添“常用操作”板块，增添导出数据功能，优化监测曲线板块。

### 功能改进

【设备对比】现在将设备加入了环境监控的环境树中，可以统一在【环境详情】中混合对比环境和设备。

【设备报警】设备报警设备名称前加入设备类型。

### 问题修复

【全局】Bug修复

### 其他变更

无。



## 稳定版v2.2.02_P001@2017-12-29

### 综述

   增加藏文切换


## 稳定版v2.2.02@2017-12-19

### 综述

   新增藏品导入功能
   区域中心数据对接与支持

### 新增特性

【藏品管理】新增藏品信息excel导入功能与藏品图片rar打包导入功能

### 功能改进

【全局】区域中心数据对接与支持
【全局】优化了一些文字描述，如将文物变为藏品
【全局】土壤温湿度监测终端各参数显示
【全局】各参“数据异常”判定条件调整
【环境监控】原始数据tab增添土壤温湿度参数类型
【环境详情与对比】阈值设置增添土壤温湿度参数类型

### 问题修复

【全局】Bug修复
【角色设置】位置权限中添加囊匣的权限
【用户管理】用户管理显示超级管理员账号
【气象站】修改气象站紫外参数单位为W/m²

### 其他变更

无。


## 稳定版v2.2.01@2017-10-26

### 综述

1. 规范了传感器异常的处理机制，增加了设备报警页面
1. 设备下载数据现在可以添加任务后去做其他事情了，数据后台下载
1. 搜索和筛选由分散的形式改为集中的形式，一步到位筛选和搜索自己想要的东西
1. 增添了简单的藏品管理功能，能够进行出入库和盘点

### 新增特性

【系统设置】平台参数设置
【设备管理】新增灯光控制终端设备类型，新增灯光控制
【藏品管理】新增藏品入库，藏品出库，藏品盘点等页面


### 功能改进

【设备管理】传感器异常处理机制，增加了设备报警页面
【全局】参数名称及参数单位调整
【地图详情】地图详情标签修改，默认不显示文物图标
【全局】统一规范了各参数的中英文名称、缩写及单位
【设备管理】设备数据异步下载
【环境监控】环境监控界面极值拆分成极大值和极小值，取消变异系数
【地图详情】地图图例优化
【全局】搜索与筛选优化
【全局】单选环境树和多选环境树优化


### 问题修复

【全局】Bug修复

### 其他变更

无。


## 稳定版v2.2.0 @ 2017-07-05

### 综述

1. 地图选取设备对比的功能。现在可以直接在地图上选择设备加入对比了。   
1. 基础数据统计分析的性能优化。【环境监控】界面现在出统计结果的等待时间大幅缩短，并且可以选取较长时间进行数据分析了。
1. 设备数据批量下载。我们对设备批量下载的性能和细节（插入占位符，文件命名等）进行了优化，下载可以更愉快的下载设备数据了。
1. 文物管理。我们增强了文物管理板块的功能，使之能够进行简单的文物出入库及盘点管理。
1. 用户与权限管理。我们加入了用户管理与用户权限管理板块，现在可以对每位用户的权限进行设置了。
1. 设备状态判定优化。我们完善了设备各状态判定的机制，使得设备状态可以一目了然的得到。

### 新增特性

1. 【地图详情】新增地图选设备并加入对比功能。
1. 【文物管理】新增文物入库、文物出库、文物盘点页面入口。
1. 【文物入库】本界面可以添加文物以及将选定的文物入库。
1. 【文物出库】本界面可以将已经入库的文物出库。
1. 【文物盘点】本界面可以创建盘点计划以及进行盘点工作记录。
1. 【用户管理】新增用户管理模块，可以分配用户功能权限与数据权限。
1. 【文物管理】新建文物板块新增添加文物图片功能。
1. 【文物详情】文物概况板块新增添加/修改文物图片功能，增添文物名称修改功能，新增删除文物功能。
1. 【设备管理】批量设置板块新增修改设备板块，可以批量调整设备位置和设备状态。

### 功能改进

1. 【环境监控】基础数据统计分析性能优化。
1. 【设备管理】多设备数据导出性能优化与丢失数据站位。
1. 【环境详情】曲线样式及Y轴优化。
1. 【综合管理】室外气象站样式优化。
1. 【文物管理】文物展示从卡片式变为列表式，展示更多信息，更高效的同时方便筛选。
1. 【综合管理】展厅小环统计包含下属环境，之前只包括展厅小环境本身数据。
1. 【设备管理】格式风格依照UI设计图调整。

### 问题修复

1. 【设备管理】震动传感器、土壤温湿度传感器显示问题。
1. 【设备管理】修复设备状态误判的问题。
1. 【全局】Bug修复。

### 其他变更

    无。




## 稳定版v2.1.5 @ 2017-05-02

### 问题修复
    1.退出登录后，其余登录页面的操作不能跳转至登录页面
    2.综合管理,各列表详情页样式不一致
    3.设备管理,从设备管理的安装位置中点击相同环境名称中的某一个跳转至环境树中第一个环境
    4.设备管理,列表中第一次点击设备安装位置，跳转至环境详情与对比页面时，该环境未默认选中
    5.环境监控,环境对比与详情中报警曲线在点击参数时未按照对应阈值报警
    6.设备详情,tab切换高度不固定
    7.设备对比,无数据设备提示信息显示错误
    8.设备对比,有对比数据切换至无对比数据时,图形显示错误
    9.环境监控,环境对比与详情先多选环境后单选环境时未显示报警阈值和对应曲线
    10.环境监控,环境对比与详情曲线标点红蓝色错位
    11.设备管理,同柜设备跳转到对应的页面,跳转完无法获取数据
    12.综合管理,可视化热区放缩无法保持可视化颜色
    13.综合管理,环境对比与详情中曲线报警反选无法按照正常值域判断
    14.设备详情,修改设备状态为select样式
    15.设备详情,历史信息没有数据
    16.综合管理,展厅可视化字体距离,热区放缩后，选择筛选颜色条时不能正常显示
    17.综合管理,可视化热区湿度和温度颜色条相反
    18.环境连接跳转修改
### 功能改进
    1.修改页面的时间选择插件
    2.地图视图默认显示展柜状态
    3.调整左侧全局导航对比度
    4.地图视图图标更新
### 新增特性
    1.设备对比功能
    2.环境报警功能
### 其他变更

# 稳定版v2.1.4@2017-03-17

## 功能特性

1.图标体系更换，定位更换，聚合显示   
2.批量设置，参数下发   
3.样式修正   
4.热区常显，区域颜色修改   
5.中继网关不显示曲线   
6.页面返回图标


# 稳定版v2.1.3@2017-03-08

## 功能特性

1.解除综合管理关注与其他列表联系   
2.添加权限   
3.添加设备数据对比   
4.添加设备、设备原始数据、文物导出功能   
5.优化设备数据表   
6.设备管理--设备列表添加设备位置信息
7.时间格式变更
8.环境监测概览修改
9.智能展柜数据存储

# 稳定版v2.1.2@2017-02-14

## 功能特性

1.优化数据库索引  
2.预警推送   
3.topo图去掉调试语句；环境监测--设备、文物位置   
4.获取token失败时生成新token   
5.环境--极值表   
6.环境监测--数据曲线；数据概览   
7.参数预警清除bug修复   
8.综合管理--环境排序   



# 稳定本v2.1.1@2017-01-19

## 功能特性

1.综合管理   
2.环境监控   
3.文物管理   
4.设备管理   
5.设置环境   


-----

# 部署步骤

### 1.上传代码包

将文件上传到web服务器上,并解压

~~~bash
unzip 2.1.1.zip -d /usr/local/ampps/www/2.1.1/
~~~

默认配置为:

~~~bash
VERSION="2.1.1" #版本号 

DB_IP="192.168.100.11" #数据库ip
DB_USER="museum_php" #数据库用户名
DB_PWD="zkzl_-4102" #数据库密码
DB_NAME="sx"  #数据库名前缀 ${DB_NAME}_base,${DB_NAME}_env,${DB_NAME}_relic
DB_PORT=3306;

WEB_IP="192.168.100.12" #node 访问web IP
NT_PORT=8020   #node 监听端口
~~~

不需要修改直接跳下一步

如果要修改的话,手动修改或者上传config.sh到/usr/local/ampps/www/2.1.1/

编辑版本号，数据库配置，node配置

~~~bash
vim config.sh
./config.sh
~~~

前端修改配置需要安装gulp

~~~bash
npm install gulp -g
~~~

### 2.将env_nodejs部署到node服务器上 

打包env_nodejs,上传到node服务器上,如果已存在，先备份

~~~bash
unzip env_nodejs.zip -d /usr/local/ampps/
cd bin/
chmod +x * #设置执行文件权限
sudo ./start.sh  #启动
sudo ./stop.sh  #停止
sudo vim /etc/rc.local #添加自启动
/usr/local/ampps/env_nodejs/bin/start.sh

~~~~

### 3.创建web连接

~~~bash
cd /usr/local/ampps/www/
rm web  #存在时才删除，不要加/
ln -s 2.1.1/web .
~~~

### 4.访问http://192.168.8.12/web
