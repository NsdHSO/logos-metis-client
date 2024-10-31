import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@components/ParallaxScrollView';
import { H1, H2, H3, H4, H5, H6, H7, H8, P } from '@components/Typography';
import React from 'react';
import { ThemedView } from '@components/ThemedView';
import { ThemedText } from '@components/ThemedText';


export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
            <ThemedView
            style={styles.container}>
                <P>Iadsfdfncu</P>
                <H1>Parandulea</H1>
                <H2>Parandulea</H2>
                <H3>Parandulea</H3>
                <H4>Parandulea</H4>
                <H5>Parandulea</H5>
                <H6>Parandulea</H6>
                <H7>Parandulea</H7>
                <H8>Parandulea</H8>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
      display: 'flex',
        gap:0
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        fontSize: 340
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
