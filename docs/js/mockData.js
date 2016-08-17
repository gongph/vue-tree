import Mock from 'mockjs';

Mock.mock('http://ajaxTree.com', 'post', {
	'datas': [{
		id: '1',
		name: '水果',
		isParent: true,
		childrens: [{
			id: '11',
			name: '苹果',
			isParent: false,
			childrens: []
		}, {
			id: '12',
			name: '热带水果',
			isParent: true,
			childrens: [{
				id: '121',
				name: '香蕉',
				isParent: false,
				childrens: []
			}]
		}, {
			id: '13',
			name: '其他',
			isParent: false
		}]
	}, {
		id: '2',
		name: '蔬菜',
		isParent: true,
		childrens: [{
			id: '21',
			name: '大白菜',
			isParent: false,
			childrens: []
		}, {
			id: '22',
			name: '瓜类',
			isParent: true,
			childrens: [
				{
					id: '221',
					name: '南瓜',
					isParent: false
				},{
					id: '222',
					name: '冬瓜',
					isParent: false
				}
			]
		}]
	}, {
		id: '3',
		name: '面食',
		isParent: true,
		childrens: [{
			id: '31',
			name: '面条',
			isParent: false
		}]
	}, {
		id: '4',
		name: '其他',
		isParent: false
	}]
});

Mock.mock('http://ss.com', 'post', {
	'datas': [{
		id: '11',
		name: '上市子节点-1',
		isParent: true,
		childrens: []
	}]
});

Mock.mock('http://kj.com', 'post', {
	'datas': [{
		id: '22',
		name: '会计子节点-1',
		isParent: true,
		childrens: []
	}]
});