import { useState, useEffect } from "react";
import './Calculator.css';

function App() {
    const [value, setValue] = useState('');
    
     useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;

            if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '00'].includes(key)) {
                setValue(prev => prev + key);
            } else if (key === 'Enter') {
                e.preventDefault();
                try {
                    setValue(eval(value).toString());
                } catch {
                    setValue("Error");
                }
            } else if (key === 'Backspace') {
                setValue(prev => prev.slice(0, -1));
            } else if (key === 'Escape') {
                setValue('');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [value]);

    return (
        <>
            <div className="container">
                <div className="calculator">
                    <form>
                        <div className="display">
                            <input type="text" value={value} readOnly />
                        </div>
                        <div>
                            <input type="button" value="AC" onClick={() => setValue('')} />
                            <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
                            <input type="button" value="." onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="/" onClick={(e) => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="7" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="8" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="9" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="*" onClick={(e) => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="4" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="5" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="6" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="+" onClick={(e) => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="1" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="2" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="3" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="-" onClick={(e) => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="00" onClick={(e) => setValue(value + e.target.value)} />
                            <input type="button" value="0" onClick={(e) => setValue(value + e.target.value)} />
                            <input
                                type="button"
                                value="="
                                className="equal"
                                onClick={() => {
                                    try {
                                        setValue(eval(value).toString());
                                    } catch {
                                        setValue("Error");
                                    }
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
