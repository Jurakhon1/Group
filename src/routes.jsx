import Header from "./components/header/header";
import { RouterProvider,  createBrowserRouter} from 'react-router-dom';
import PageFirst from "./components/page1/page1";
import PageSecond from "./components/page2/page2";
import PageThird from "./components/page3/page3";
import PageFour from "./components/page4/page4";
import PageFive from "./components/page5/page5";
import PageSix from "./components/page6/page6";
import PageSeven from "./components/page7/page7";
import PageEight from "./components/page8/page8";
import PageNine from "./components/page9/page9";
import PageTen from "./components/page10/page10";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                index:true,
                element: <PageFirst />
            },
            {
                path: "/page2",
                element: <PageSecond />
            },
            {
                path: "/page3",
                element: <PageThird />
            },
            {
                path: "/page4",
                element: <PageFour />
            },
            {
                path: "/page5",
                element: <PageFive />
            }
            ,
            {
                path: "/page6",
                element: <PageSix />
            }
            ,
            {
                path: "/page7",
                element: <PageSeven />
            },
            {
                path: "/page8",
                element: <PageEight />
            },
            
            {
                path:"/page9",
                element:<PageNine/>
            },
            {
                path:"/page10",
                element:<PageTen/>
            }

        ]
    }
])
export default function Browser() {
    return <RouterProvider router={router} />
}