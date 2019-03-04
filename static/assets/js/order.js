$(function () {
	/*
		下单地址选择
	*/
	var $addAddress = $(".add-address");
	var $addAddressBtn = $(".domicile .select-address .add_address");
	var $defaultAddress = $(".domicile .select-address .default_address");

	$addAddressBtn.on("click", function () {
		$addAddress.show();
	})
	$defaultAddress.on("click", function () {
		$addAddress.hide();
	})
})