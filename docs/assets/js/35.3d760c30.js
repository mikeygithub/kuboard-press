(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{335:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装-kuboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-kuboard","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 kuboard")]),t._v(" "),a("h2",{attrs:{id:"前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提","aria-hidden":"true"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),a("p",[t._v("安装 kuboard 时，假设您已经：")]),t._v(" "),a("ul",[a("li",[t._v("已经有一个 kubernetes 集群")]),t._v(" "),a("li",[t._v("拥有对该 kubernetes 集群执行 kubectl 命令时的所有权限")])]),t._v(" "),a("p",[t._v("如果没有 kubernetes 集群，可以有如下选项：")]),t._v(" "),a("ul",[a("li",[t._v("通过 阿里云 创建 kubernetes 容器服务，并获得和配置 kubectl 的访问参数")]),t._v(" "),a("li",[t._v("参考 "),a("a",{attrs:{href:"install-k8s"}},[t._v("安装 kubernetes 用于测试")])]),t._v(" "),a("li",[t._v("或参考 "),a("a",{attrs:{href:"install-kubernetes"}},[t._v("安装 kubernetes 高可用")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=obezo3pg",target:"_blank",rel:"noopener noreferrer"}},[t._v("领取阿里云最高2000元红包"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容性","aria-hidden":"true"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Kubernetes 版本")]),t._v(" "),a("th",[t._v("Kuboard 版本")]),t._v(" "),a("th",[t._v("兼容性")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("v1.15")]),t._v(" "),a("td",[t._v("v1.0.0-beta.10")]),t._v(" "),a("td",[a("span",{staticStyle:{"font-size":"24px"}},[t._v("😄")])]),t._v(" "),a("td",[t._v("Kuboard作者所使用的Kubernetes版本")])]),t._v(" "),a("tr",[a("td",[t._v("v1.14")]),t._v(" "),a("td",[t._v("v1.0.0-beta.10")]),t._v(" "),a("td",[a("span",{staticStyle:{"font-size":"24px"}},[t._v("😄")])]),t._v(" "),a("td",[t._v("Kuboard作者所使用的Kubernetes版本")])]),t._v(" "),a("tr",[a("td",[t._v("v1.13")]),t._v(" "),a("td",[t._v("v1.0.0-beta.10")]),t._v(" "),a("td",[a("span",{staticStyle:{"font-size":"24px"}},[t._v("🤔")])]),t._v(" "),a("td",[t._v("理论上可以，尚未听到用户反馈兼容性问题")])]),t._v(" "),a("tr",[a("td",[t._v("v1.12")]),t._v(" "),a("td",[t._v("v1.0.0-beta.10")]),t._v(" "),a("td",[a("span",{staticStyle:{"font-size":"24px"}},[t._v("😐")])]),t._v(" "),a("td",[t._v("Kubernetes Api 尚不支持 dryRun，"),a("br"),t._v("忽略Kuboard在执行命令式的参数校验错误，可正常工作")])]),t._v(" "),a("tr",[a("td",[t._v("v1.11")]),t._v(" "),a("td",[t._v("v1.0.0-beta.10")]),t._v(" "),a("td",[a("span",{staticStyle:{"font-size":"24px"}},[t._v("😐")])]),t._v(" "),a("td",[t._v("同上")])])])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[a("strong",[t._v("Kubernetes 安装方式")])]),t._v(" "),a("ul",[a("li",[t._v("部分用户使用二进制包的形式安装 Kubernetes，Kuboard 现在的版本不能在这类 Kubernetes 集群中正常工作，作者正在解决此问题。")]),t._v(" "),a("li",[t._v("如果您是使用 kubeadm 安装的 Kubernetes 集群（Kubernetes 官方推荐的安装方式），请放心使用 Kuboard。")]),t._v(" "),a("li",[t._v("Kubeadm 相关资料请参考 https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/")])])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[a("strong",[t._v("获取并修改yaml文件")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/eip-work/eip-monitor-repository/master/dashboard/kuboard.yaml\n")])])]),a("p",[t._v("修改文件 kuboard.yaml 中 Ingress 的 host 为 kuboard.yourclustername.yourdomain.com")]),t._v(" "),a("p",[a("strong",[t._v("执行安装")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl apply -f kuboard.yaml \n")])])]),a("h2",{attrs:{id:"获取-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-token","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取 token")]),t._v(" "),a("h3",{attrs:{id:"获取管理员用户-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取管理员用户-token","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取管理员用户 token")]),t._v(" "),a("p",[a("strong",[t._v("拥有的权限")])]),t._v(" "),a("p",[t._v("此Token拥有 ClusterAdmin 的权限，可以执行所有操作")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl -n kube-system describe secret "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n kube-system get secret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kuboard-user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("   \n")])])]),a("p",[t._v("执行完该命令后，可获得类似如下的输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Name: admin-user-token-g8hxb\nNamespace: kube-system\nLabels: <none>\nAnnotations: [kubernetes.io/service-account.name](http://kubernetes.io/service-account.name): kuboard-user\n[kubernetes.io/service-account.uid](http://kubernetes.io/service-account.uid): 948bb5e6-8cdc-11e9-b67e-fa163e5f7a0f\n\nType: [kubernetes.io/service-account-token](http://kubernetes.io/service-account-token)\n\nData\n====\nca.crt: 1025 bytes\nnamespace: 11 bytes\ntoken: eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLWc4aHhiIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI5NDhiYjVlNi04Y2RjLTExZTktYjY3ZS1mYTE2M2U1ZjdhMGYiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.DZ6dMTr8GExo5IH_vCWdB_MDfQaNognjfZKl0E5VW8vUFMVvALwo0BS-6Qsqpfxrlz87oE9yGVCpBYV0D00811bLhHIg-IR_MiBneadcqdQ_TGm_a0Pz0RbIzqJlRPiyMSxk1eXhmayfPn01upPdVCQj6D3vAY77dpcGplu3p5wE6vsNWAvrQ2d_V1KhR03IB1jJZkYwrI8FHCq_5YuzkPfHsgZ9MBQgH-jqqNXs6r8aoUZIbLsYcMHkin2vzRsMy_tjMCI9yXGiOqI-E5efTb-_KbDVwV5cbdqEIegdtYZ2J3mlrFQlmPGYTwFI8Ba9LleSYbCi4o0k74568KcN_w\n")])])]),a("h3",{attrs:{id:"获取只读用户的token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取只读用户的token","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取只读用户的Token")]),t._v(" "),a("p",[a("strong",[t._v("拥有的权限")])]),t._v(" "),a("ul",[a("li",[t._v("view  可查看名称空间的内容")]),t._v(" "),a("li",[t._v("system:node   可查看节点信息")]),t._v(" "),a("li",[t._v("system:persistent-volume-provisioner  可查看存储类和存储卷声明的信息")])]),t._v(" "),a("p",[a("strong",[t._v("适用场景")])]),t._v(" "),a("p",[t._v("只读用户不能对集群的配置执行修改操作，非常适用于将开发环境中的 kuboard 只读权限分发给开发者，以便开发者可以便捷地诊断问题")]),t._v(" "),a("p",[t._v("执行如下命令可以获得 "),a("span",{staticStyle:{color:"#F56C6C","font-weight":"500"}},[t._v("只读用户")]),t._v(" 的 Token")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl -n kube-system describe secret "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n kube-system get secret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" kuboard-viewer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("   \n")])])]),a("h2",{attrs:{id:"访问-kuboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-kuboard","aria-hidden":"true"}},[t._v("#")]),t._v(" 访问 Kuboard")]),t._v(" "),a("h3",{attrs:{id:"通过域名访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过域名访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过域名访问")]),t._v(" "),a("p",[t._v("在浏览器打开链接 http://kuboard.yourclustername.yourdomain.com （使用前面已修改的域名）")]),t._v(" "),a("p",[t._v("输入前一步骤中获得的 token，可进入控制台界面")]),t._v(" "),a("h3",{attrs:{id:"通过-nodeport-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-nodeport-访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过 NodePort 访问")]),t._v(" "),a("p",[t._v("kuboard Service 使用了 NodePort 的方式暴露服务，NodePort 为 32567；您可以按如下方式访问 kuboard")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://any-of-your-node-ip:32567/\n")])])]),a("blockquote",[a("p",[t._v("您也可以修改 kuboard.yaml 文件，使用自己定义的 NodePort 端口号")])])])},[],!1,null,null,null);e.default=r.exports}}]);