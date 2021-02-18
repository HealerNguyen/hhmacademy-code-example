function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}
now("Todo A");
