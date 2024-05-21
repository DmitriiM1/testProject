import { Button, ButtonGroup } from "@mui/material";



export function Page(props) {

    const navButtons = ['Home', 'About me', 'Projects']
    return (
        <div>

            <header>
                <h2>Header</h2>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                    {navButtons.map(navButton=><Button key={navButton}>{navButton}</Button>)}
                </ButtonGroup>
            </header>

            <main>
                {props.children}
            </main>

            <footer>
                <h2>Footer</h2>
            </footer>

        </div>
    )
}