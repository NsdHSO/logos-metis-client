import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@components/HelloWave';
import ParallaxScrollView from '@components/ParallaxScrollView';
import { ThemedText } from '@components/ThemedText';
import { ThemedView } from '@components/ThemedView';
import { H1, H2, H3, H4, H5, H6, H7, H8, P } from '@components/Typography';

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
            <ThemedView style={styles.titleContainer}>
                <H1>Iancu</H1>
                <H2>Iancu</H2>
                <H3>Iancu</H3>
                <H4>Iancu</H4>
                <H5>Iancu</H5>
                <H6>Iancu</H6>
                <H7>Iancu</H7>
                <H8>Iancu</H8>
                <P>Iancu</P>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'flex-start',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
