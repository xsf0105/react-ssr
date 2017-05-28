const server_host =  'https://cnodejs.org/api/';

module.exports = {
    SERVICE: {
            POLICY: {
                LIST: server_host + 'policy/findPage',
                DETAILS: server_host + 'policy/load',
                STORE: server_host + 'policyCollect/save',
                UNSTORE: server_host + 'policyCollect/delete',
                SHARE: server_host + 'policyShare/save',
                PRAISE: server_host + 'policy/praise',
                // 在线匹配
                MATCHONLINE: server_host + 'policy/matchePolicy'

            },
            EDU: {
                LIST: server_host + 'v1/topics',
                DETAILS: server_host + 'v1/topic',
                STORE: server_host + 'educationStudyCollect/save',
                UNSTORE: server_host + 'educationStudyCollect/delete',
                SHARE: server_host + 'educationStudyShare/save',
                PRAISE: server_host + 'educationStudy/praise'
            }
        }
}