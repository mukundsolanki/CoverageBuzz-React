import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="text-center text-white">

                    <div class="text-center text-dark p-3">
                        Created with ❤️ by
                        <a class="text-dark text-decoration-none" href="https://github.com/mukundsolanki"> Mukund Solanki</a>
                    </div>

                    {/* <div class="text-center text-dark">
                        © 2023 Copyright All rights reserved
                    </div> */}
                </footer>
            </div>
        )
    }
}

export default Footer