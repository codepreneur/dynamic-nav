const nav = [
{
    "key":"parent-a", 
    "label":"Parent-A", 
    "child":[
        {
            "key":"child-a-a", 
            "label":"Child a a", 
            "content":"this is the parent A content hallo world",
            "child":[
                {
                    "key":"child-a-a-a", 
                    "label":"Child a a a", 
                    "content":"this is the parent A AA content hallo world"
                },
                {
                    "key":"child-a-a-b", 
                    "label":"Child a a b", 
                    "content":"hallo world this is child A A B"
                },
                {
                    "key":"child-a-a-c", 
                    "label":"Child a a c", 
                    "content":"this webpage is awesome"
                }
            ]            
        },
        {
            "key":"child-a-b", 
            "label":"Child a b", 
            "content":"hallo world this is child b"
        },
        {
            "key":"child-a-c", 
            "label":"Child a c", 
            "content":"this webpage is awesome"
        }
    ]
},
{
    "key":"parent-b", 
    "label":"Parent-B", 
    "child":[
        {
            "key":"child-b-a", 
            "label":"Child b a", 
            "content":"this is the parent B Code is working fine"
        },
        {
            "key":"child-b-b", 
            "label":"Child b b", 
            "content":"your job is done now!"
        }
    ]
}
]

export default nav
