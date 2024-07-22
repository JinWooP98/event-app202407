import React, {useState} from 'react';
import EventContext from "./event-context";

// children 은 항상 자식 요소들, 우리가 의도적으로 사용 X
const EventProvider = ({children}) => {

    const [totalEventCount, setTotalEventCount] = useState(0);

    return (
        // .Provider 을 붙이는 이유 -> context에는 provider와 consumer가 있는데, provider은 .provider로 명시, consumer은 useContext를 사용
        <EventContext.Provider
            value={{
                totalEventCount,
                changeTotalEventCount: (count) => setTotalEventCount(count),
            }}
        >
            {children}
        </EventContext.Provider>
    );
};

export default EventProvider;