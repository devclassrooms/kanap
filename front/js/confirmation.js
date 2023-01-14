function deleteCacheStorage()
{
    const theStorage = window.localStorage;
    theStorage.clear();
    alert('hello');
}

function getNumberOfOrder()
{
    let theURL = window.location.search;
    const theId = new URLSearchParams(theURL).get("orderId");
    const theIdd = document.querySelector("#orderId")
    theIdd.innerHTML = `${theId}`
}
getNumberOfOrder();
deleteCacheStorage();
