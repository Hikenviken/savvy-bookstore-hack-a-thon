export default function Navigation(state){
    return`
        <nav>
            <ul class="links">
                <a href="#"><li>${state.navigation.links[0]}</li></a>
                <a href="#"><li>${state.navigation.links[1]}</li></a>
            </ul>
        </nav>
`;
}
