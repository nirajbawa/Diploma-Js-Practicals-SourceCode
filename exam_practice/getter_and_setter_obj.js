let obj = {
    defname:"",
    deflname:"",
    set name(name){
        this.defname = name;
    },
    get name()
    {
        return this.defname;
    },
    get lname()
    {
        return this.deflname;
    },
    set lname(lname)
    {
        this.deflname = lname;
    }
}


obj.name = "niraj";
obj.lname = "bava";

console.log(obj.name);
console.log(obj.lname);