<template>
	<div class="testContainer">
		<div class="col-sm-12">
			<div class="panel panel-warning">
				<div class="panel-heading">菠萝的去噪处理</div>
				<div class="panel-body">
					<img src="../../../image/图片6.png" class="img-responsive img-rounded img-thumbnail" alt="me">
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	
</script>

<style lang="less" scoped>
@font-face {
    font-family: 'icomoon';
    src:  url('../../../fonts/icomoon.eot?z9byv6');
    src:  url('../../../fonts/icomoon.eot?z9byv6#iefix') format('embedded-opentype'),
      url('../../../fonts/icomoon.ttf?z9byv6') format('truetype'),
      url('../../../fonts/icomoon.woff?z9byv6') format('woff'),
      url('../../../fonts/icomoon.svg?z9byv6#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
}

.testContainer{
	.header{
		font-size: 30px;

		span{
			display:inline-block;
			width:430px;
			height:62px;
			line-height: 62px;
			font-family: "icomoon";
		}
	}
	
	.panel-body{
		text-align:center;
	}
	
	img{
		width: 50%;
	}
}

</style>