import Mock from 'mockjs';

/**
 * 同步加载
 */
Mock.mock('http://syncLoadData.com', 'post', {
	'datas': [{
		id: '1',
		name: '水果',
		pid: '0',
		isParent: true,
		childrens: [{
			id: '11',
			name: '苹果',
			pid: '1',
			isParent: false,
			childrens: []
		}, {
			id: '12',
			name: '热带水果',
			pid: '1',
			isParent: true,
			childrens: [{
				id: '121',
				name: '香蕉',
				pid: '12',
				isParent: false,
				childrens: []
			}]
		}, {
			id: '13',
			name: '其他',
			pid: '1',
			isParent: false
		}]
	}, {
		id: '2',
		name: '蔬菜',
		pid: '0',
		isParent: true,
		childrens: [{
			id: '21',
			name: '大白菜',
			pid: '2',
			isParent: false,
			childrens: []
		}, {
			id: '22',
			name: '瓜类',
			pid: '2',
			isParent: true,
			childrens: [
				{
					id: '221',
					name: '南瓜',
					pid: '22',
					isParent: false
				},{
					id: '222',
					name: '冬瓜',
					pid: '22',
					isParent: false
				}
			]
		}]
	}, {
		id: '3',
		name: '面食',
		pid: '0',
		isParent: true,
		childrens: [{
			id: '31',
			name: '面条',
			pid: '3',
			isParent: false
		}]
	}, {
		id: '4',
		name: '其他',
		pid: '0',
		isParent: false
	}]
});

/**
 * 异步加载
 */
Mock.mock('http://asyncLoadData.com', 'post', {
	'datas': [{
		'id|+1': 1,
		name: '@name()',
		pid: '0',
		isParent: true,
		childrens: []
	}]
});