let inventario = [
    { nome: 'Óleo de corpo Baunilha e Amêndoas', preco: 21.50, emEstoque: true },
    { nome: 'Esfoliante Corporal Melancia', preco: 25, emEstoque: false },
    { nome: 'Creme Corporal Cereja', preco: 70, emEstoque: false },
    { nome: 'Óleo Reparador de pontas' , preco: 50, emEstoque: true},
    { nome: 'Kit Banho' , preco: 250 , emEstoque: true},
    { nome: 'Cronograma Capilar Eudora' , preco: 300 , emEstoque: true},
    { nome: 'Sabonete Líquido Vizela' , preco: 42 , emEstoque: false},
    { nome: 'Kit Esmaltes Impala Terracota' , preco: 40 , emEstoque: true},
    { nome: 'Faixa Cabelo Maquiagem' , preco: 15 , emEstoque: false},
    { nome: 'Espelho com Led' , preco: 75 , emEstoque: true },
    { nome: 'Kit Pincéis Maquiagem' , preco: 65 , emEstoque: true },
    { nome: 'Kit SkinCare NinaSecrets' , preco: 399.90, emEstoque: true },
    { nome: 'Lamina' , preco: 15 , emEstoque: false },
    ];
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].emEstoque) {
        console.log(inventario[i].nome + ' está em estoque.');
        }
        }
        let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
        console.log(produtosEmEstoque);