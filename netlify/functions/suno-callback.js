// Suno API回调处理
exports.handler = async function(event, context) {
  // 处理 OPTIONS 请求
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }
  
  // 只接受 POST 方法
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: '方法不允许' })
    };
  }
  
  try {
    // 记录回调数据
    console.log('收到Suno API回调:', JSON.stringify(event.body));
    
    // 这里可以实现回调逻辑，例如更新数据库、发送通知等
    // 目前简单返回成功
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('处理回调出错:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: '内部服务器错误' })
    };
  }
}; 