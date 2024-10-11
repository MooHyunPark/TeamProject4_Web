document.addEventListener("DOMContentLoaded", function() {
    const selectDeleteButton = document.querySelector('button[data-action="select-delete"]');
    const deleteAllButton = document.querySelector('button[data-action="delete-all"]');
    const orderButton = document.querySelector('button[data-action="order"]');

    if (selectDeleteButton) {
        selectDeleteButton.addEventListener('click', function() {
            const checkedItems = document.querySelectorAll('input[name="selectedItems"]:checked');
            if (checkedItems.length === 0) {
                alert('선택된 상품이 없습니다');
                return;
            }
            if (confirm('정말 삭제하시겠습니까?')) {
                const checkedValues = Array.from(checkedItems).map(item => item.value);
                fetch('/shoppingCart', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `selectedItems=${checkedValues.join(',')}`
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        checkedItems.forEach(item => item.closest('tr').remove());
                        location.reload();
                    }
                });
            }
        });
    }

    if (deleteAllButton) {
        deleteAllButton.addEventListener('click', function() {
            if (confirm('모든 항목을 정말 삭제하시겠습니까?')) {
                const allItems = document.querySelectorAll('input[name="selectedItems"]');
                const allValues = Array.from(allItems).map(item => item.value);
                fetch('/shoppingCart', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `selectedItems=${allValues.join(',')}`
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        allItems.forEach(item => item.closest('tr').remove());
                        location.reload();
                    }
                });
            }
        });
    }

    if (orderButton) {
        orderButton.addEventListener('click', function() {
            const allItems = document.querySelectorAll('tbody tr');
            if (allItems.length === 0) {
                alert('장바구니가 비어 있습니다. 메인으로 이동합니다.');
                window.location.href = '/main';
                return;
            }
            showPaymentDialog();
        });
    }

	    const paymentDialog = document.querySelector('.payment-dialog');
	function showPaymentDialog() {
//	    const finalTotalPrice = document.querySelector('#ftp').value; // hidden input에서 가격 가져오기

	    // 다이얼로그 열기
	    paymentDialog.showModal();
		
        // 결제 완료 버튼 이벤트
        paymentDialog.querySelector('.confirm-payment-button').addEventListener('click', function() {
            const orderData = Array.from(document.querySelectorAll('tbody tr')).map(row => ({
                user_Id: userId,
                cloth_num: row.querySelector('input[name="selectedItems"]').value,
                cloth_name: row.querySelector('.product-info').textContent.trim(),
                shoppingcart_count: row.querySelector('td:nth-child(3)').textContent.trim(),
                cloth_price: row.querySelector('td:nth-child(4)').textContent.replace('원', '').trim(),
                list_Image: row.querySelector('td:nth-child(5)').textContent.trim()
            }));
            fetch('/shoppingCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('결제가 완료되었습니다!');
                    location.reload();
                } else {
                    alert('결제 실패!');
                }
            });
        });

        // 취소 버튼 이벤트
        paymentDialog.querySelector('.cancel-payment-button').addEventListener('click', function() {
            paymentDialog.close();
        });
    }
});
