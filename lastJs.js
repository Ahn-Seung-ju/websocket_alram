var AlarmData = {
			"myAlarm_receiverEmail" : receiverEmail,
			"myAlarm_callerNickname" : memNickname,
			"myAlarm_title" : "스크랩 알림",
			"myAlarm_content" :  memNickname + "님이 <a type='external' href='/mentor/essayboard/essayboardView?pg=1&seq="+essayboard_seq+"&mentors="+ memberSeq +"'>" + essayboard_seq + "</a>번 에세이를 스크랩 했습니다."
	};
	//스크랩 알림 DB저장
	$.ajax({
		type : 'post',
		url : '/mentor/member/saveAlarm',
		data : JSON.stringify(AlarmData),
		contentType: "application/json; charset=utf-8",
		dataType : 'text',
		success : function(data){
			if(socket){
				let socketMsg = "scrap," + memNickname +","+ memberSeq +","+ receiverEmail +","+ essayboard_seq;
				console.log("msgmsg : " + socketMsg);
				socket.send(socketMsg);
			}

		},
		error : function(err){
			console.log(err);
		}
	});