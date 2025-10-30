function TitleComponent(text, content){
    const mainContainer = document.getElementById('mainContainer');
    if (!mainContainer) {
        console.warn('No se encontró el elemento mainContainer');
        return;
    }
    const before = document.getElementById('container');
    const container = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = text;
    const p = document.createElement('p');
    p.textContent = content;
    container.append(title);
    container.append(p);
    mainContainer.insertBefore(container, before);
}

TitleComponent('This is a technical proof', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, excepturi amet mollitia accusamus pariatur voluptatem expedita ratione assumenda saepe ullam nemo adipisci odit, placeat rerum voluptas, ex iusto porro impedit');
