import { Base, Component, toNative } from 'vue-facing-decorator'
import Button from '../framework/button/button'
import { ButtonLayout } from '../framework/button/button-layout'

@Component
class Comp extends Base {
    counter = 1

    onClick() {
        this.counter++
    }

    render() {
        return <div class={".root"}>
            {this.counter}
            <Button text="Click me" clicked={this.onClick} layout={ButtonLayout.Primary}/>
        </div>
    }
}

export default toNative(Comp)