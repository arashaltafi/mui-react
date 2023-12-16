import React, { useState } from 'react'
import { Button, Card, Checkbox, Label, Progress, TextInput, ToggleSwitch } from 'flowbite-react';

const App = () => {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(true);
    const [switch3, setSwitch3] = useState(true);

    return (
        <div className='flex flex-col gap-8 items-center justify-center py-16'>
            <Button>Click me</Button>
            <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button color="blue">Blue</Button>
                <Button color="gray">Gray</Button>
                <Button color="dark">Dark</Button>
                <Button color="light">Light</Button>
                <Button color="success">Success</Button>
                <Button color="failure">Failure</Button>
                <Button color="warning">Warning</Button>
                <Button color="purple">Purple</Button>
            </div>

            <div className="flex flex-wrap gap-2">
                <Button pill>Default</Button>
                <Button color="blue" pill>
                    Blue
                </Button>
                <Button color="gray" pill>
                    Gray
                </Button>
                <Button color="dark" pill>
                    Dark
                </Button>
                <Button color="light" pill>
                    Light
                </Button>
                <Button color="success" pill>
                    Success
                </Button>
                <Button color="failure" pill>
                    Failure
                </Button>
                <Button color="warning" pill>
                    Warning
                </Button>
                <Button color="purple" pill>
                    Purple
                </Button>
            </div>

            <div className="flex flex-wrap gap-2">
                <Button gradientMonochrome="info">Info</Button>
                <Button gradientMonochrome="success">Success</Button>
                <Button gradientMonochrome="cyan">Cyan</Button>
                <Button gradientMonochrome="teal">Teal</Button>
                <Button gradientMonochrome="lime">Lime</Button>
                <Button gradientMonochrome="failure">Failure</Button>
                <Button gradientMonochrome="pink">Pink</Button>
                <Button gradientMonochrome="purple">Purple</Button>
            </div>

            <div className="flex flex-wrap gap-2">
                <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
                <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
                <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
                <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
                <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
                <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
                <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
            </div>

            <div className="flex flex-wrap gap-2">
                <Button outline gradientDuoTone="purpleToBlue">
                    Purple to Blue
                </Button>
                <Button outline gradientDuoTone="cyanToBlue">
                    Cyan to Blue
                </Button>
                <Button outline gradientDuoTone="greenToBlue">
                    Green to Blue
                </Button>
                <Button outline gradientDuoTone="purpleToPink">
                    Purple to Pink
                </Button>
                <Button outline gradientDuoTone="pinkToOrange">
                    Pink to Orange
                </Button>
                <Button outline gradientDuoTone="tealToLime">
                    Teal to Lime
                </Button>
                <Button outline gradientDuoTone="redToYellow">
                    Red to Yellow
                </Button>
            </div>

            <div className="flex flex-wrap items-start gap-2">
                <Button size="xs">Extra small</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Base</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra large</Button>
            </div>

            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://arashaltafi.ir/arash.jpg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>

            <div className="flex max-w-md flex-col gap-4">
                <ToggleSwitch checked={switch1} label="Toggle me" onChange={setSwitch1} />
                <ToggleSwitch checked={switch2} label="Toggle me (checked)" onChange={setSwitch2} />
                <ToggleSwitch checked={false} disabled label="Toggle me (disabled)" onChange={() => undefined} />
                <ToggleSwitch checked={true} disabled label="Toggle me (disabled)" onChange={() => undefined} />
                <ToggleSwitch checked={switch3} onChange={setSwitch3} />
            </div>

            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" type="password" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                    </div>
                    <TextInput id="repeat-password" type="password" required shadow />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                    </Label>
                </div>
                <Button type="submit">Register new account</Button>
            </form>

            <div className="flex flex-col gap-2 w-1/2">
                <div className="text-base font-medium">Dark</div>
                <Progress progress={45} color="dark" />
                <div className="text-base font-medium text-blue-700">Blue</div>
                <Progress progress={45} color="blue" />
                <div className="text-base font-medium text-red-700">Red</div>
                <Progress progress={45} color="red" />
                <div className="text-base font-medium text-green-700">Green</div>
                <Progress progress={45} color="green" />
                <div className="text-base font-medium text-yellow-700">Yellow</div>
                <Progress progress={45} color="yellow" />
                <div className="text-base font-medium text-indigo-700">Indigo</div>
                <Progress progress={45} color="indigo" />
                <div className="text-base font-medium text-purple-700">Purple</div>
                <Progress progress={45} color="purple" />
                <div className="text-base font-medium text-cyan-700">Cyan</div>
                <Progress progress={45} color="cyan" />
                <div className="text-base font-medium text-gray-700">Gray</div>
                <Progress progress={45} color="gray" />
                <div className="text-base font-medium text-lime-700">Lime</div>
                <Progress progress={45} color="lime" />
                <div className="text-base font-medium text-pink-700">Pink</div>
                <Progress progress={45} color="pink" />
                <div className="text-base font-medium text-teal-700">Teal</div>
                <Progress progress={45} color="teal" />
            </div>

        </div>
    )
}

export default App